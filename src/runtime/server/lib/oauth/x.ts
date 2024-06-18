import type { H3Event } from 'h3'
import {
  eventHandler,
  createError,
  getQuery,
  getRequestURL,
  sendRedirect,
} from 'h3'
import { defu } from 'defu'
import { TwitterApi } from 'twitter-api-v2'
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
   * @default ['tweet.read','users.read','offline.access']
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
    config = defu(config, xConfig) as OAuthXConfig
    config.scope = ['tweet.read', 'users.read', 'offline.access']

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
    if (!query.code) {
      const { url: theRequestURL, codeVerifier, state } = twitter.generateOAuth2AuthLink(redirectUrl, { scope: config.scope })
      await useStorage().setItem(`twitter:${state}`, { theRequestURL, codeVerifier, state, redirectUrl })

      // Redirect to X Oauth page
      return sendRedirect(
        event,
        theRequestURL,
      )
    }
    const storedState: Record<string, string> = (await useStorage().getItem(`twitter:${query.state}`)) || {}
    if (query.code && query.state && storedState?.codeVerifier) {
      const loginArgs = {
        code: `${query.code}`,
        codeVerifier: storedState.codeVerifier,
        redirectUri: storedState.redirectUrl,
      }
      const twitterOAuthResponse = await twitter.loginWithOAuth2(loginArgs).catch((e) => {
        const error = createError({
          statusCode: 401,
          message: 'X login failed: Unknown error',
          data: e,
        })
        if (!onError) throw error
        return onError(event, error)
      })
      const { client: loggedClient, accessToken, refreshToken, expiresIn } = twitterOAuthResponse || {}
      const tokens = { accessToken, refreshToken, expiresIn }
      config.fields = ['created_at', 'description', 'entities', 'id', 'location', 'most_recent_tweet_id', 'name', 'pinned_tweet_id', 'profile_image_url', 'protected', 'public_metrics', 'url', 'username', 'verified', 'verified_type', 'withheld']
      const { data: user } = (loggedClient && await loggedClient.v2.me({ 'user.fields': config.fields })) || {}
      if (!user) {
        throw new Error('X login failed: no user found')
      }
      return onSuccess(event, {
        user,
        tokens,
      })
    }
  })
}
