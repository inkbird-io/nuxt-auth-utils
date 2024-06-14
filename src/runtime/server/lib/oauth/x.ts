import type { H3Event } from 'h3'
import {
  eventHandler,
  createError,
  getQuery,
  getRequestURL,
  sendRedirect,
} from 'h3'
import { ofetch } from 'ofetch'
import { withQuery } from 'ufo'
import { defu } from 'defu'
import { TwitterApi } from 'twitter-api-v2'
import { useState } from 'nuxt/app'
import { useRuntimeConfig, useStorage } from '#imports'
import type { OAuthConfig } from '#auth-utils'

export interface OAuthXConfig {
  /**
   * X OAuth Client ID
   * @default process.env.NUXT_OAUTH_X_CLIENT_ID
   */
  clientId?: string
  /**
   * X OAuth Client Secret
   * @default process.env.NUXT_OAUTH_X_CLIENT_SECRET
   */
  clientSecret?: string
  /**
   * X OAuth Scope
   * @see https://developers.x.com/docs/permissions
   * @example [ 'tweet.read' ],
   */
  scope?: string[]

  /**
   * X OAuth User Fields
   * @default [ 'id', 'name'],
   * @see https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
   * @example [ 'id', 'name', 'email' ],
   */
  fields?: string[]

  /**
   * X OAuth Authorization URL
   * @default 'https://x.com/i/oauth2/authorize'
   */
  authorizationURL?: string

  /**
   * X OAuth Token URL
   * @default 'https://api.x.com/2/oauth2/token'
   */
  tokenURL?: string

  /**
   * Extra authorization parameters to provide to the authorization URL
   * @see https://developers.x.com/docs/x-login/guides/advanced/manual-flow/
   */
  authorizationParams?: Record<string, string>
}

export function xEventHandler({
  config,
  onSuccess,
  onError,
}: OAuthConfig<OAuthXConfig>) {
  return eventHandler(async (event: H3Event) => {
    const xConfig = useRuntimeConfig(event).oauth?.x
    config = defu(config, xConfig, {
      authorizationURL: 'https://twitter.com/i/oauth2/authorize',
      tokenURL: 'https://api.twitter.com/2/oauth2/token',
      authorizationParams: {
        response_type: 'code',
        code_challenge: 'challenge',
        code_challenge_method: 'plain',
      },
      scope: ['tweet.read', 'users.read', 'offline.access'],
    }) as OAuthXConfig

    const query = getQuery(event)
    if (query.error) {
      const error = createError({
        statusCode: 401,
        message: `X login failed: ${query.error || 'Unknown error'}`,
        data: query,
      })
      if (!onError) throw error
      return onError(event, error)
    }

    if (!config.clientId) {
      const error = createError({
        statusCode: 500,
        message:
          'Missing NUXT_OAUTH_X_CLIENT_ID or NUXT_OAUTH_X_CLIENT_SECRET env variables.',
      })
      if (!onError) throw error
      return onError(event, error)
    }

    const redirectUrl = getRequestURL(event).href
    const { clientId, clientSecret } = config
    const twitter = new TwitterApi({ clientId, clientSecret })
    console.log('navanjr', { clientId, clientSecret })
    if (!query.code) {
      const { url: theRequestURL, codeVerifier, state } = twitter.generateOAuth2AuthLink(redirectUrl, { scope: config.scope })
      await useStorage().setItem(`twitter:${state}`, { theRequestURL, codeVerifier, state, redirectUrl })
      console.log('navanjr - handling x login', { theRequestURL, codeVerifier, state, redirectUrl })

      // const theRequestURL = await twitter.generateAuthLink(redirectUrl)
      // console.log('navanjr - handling x login', { theRequestURL })

      // Redirect to X Oauth page
      return sendRedirect(
        event,
        theRequestURL,
      )
    }
    const storedState: any = await useStorage().getItem(`twitter:${query.state}`)
    if (query.code && query.state && storedState?.codeVerifier) {
      const loginArgs = {
        code: query.code,
        codeVerifier: storedState.codeVerifier,
        redirectUri: storedState.redirectUrl,
      }
      console.log('navanjr - still handling x login', JSON.stringify({ query, storedState, loginArgs }, null, 2))
      const { client: loggedClient, accessToken, refreshToken, expiresIn } = await twitter.loginWithOAuth2(loginArgs).catch((e) => {
        console.log('navanjr - error', { e })
      })
      console.log('navanjr - still handling x login', { query, storedState, loggedClient })
      // if (tokens.error) {
      //   const error = createError({
      //     statusCode: 401,
      //     message: `X login failed: ${tokens.error || 'Unknown error'}`,
      //     data: tokens,
      //   })
      //   if (!onError) throw error
      //   return onError(event, error)
      // }

      config.fields = ['created_at', 'description', 'entities', 'id', 'location', 'most_recent_tweet_id', 'name', 'pinned_tweet_id', 'profile_image_url', 'protected', 'public_metrics', 'url', 'username', 'verified', 'verified_type', 'withheld']
      // const fields = config.fields.join(',')

      // const user = await ofetch(
      // `https://api.x.com/2/users/me?user.fields=profile_image_url`,
      // )
      const { data: user } = await loggedClient.v2.me({ 'user.fields': config.fields })
      if (!user) {
        throw new Error('X login failed: no user found')
      }
      console.log('navanjr', { user })
      return onSuccess(event, {
        user,
        tokens: { accessToken, refreshToken, expiresIn },
      })
    }
  })
}
