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
import { useRuntimeConfig } from '#imports'
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
   * @default []
   * @see https://developers.x.com/docs/permissions
   * @example [ 'email' ],
   */
  scope?: string[]

  /**
   * X OAuth User Fields
   * @default [ 'id', 'name'],
   * @see https://https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
   * @example [ 'id', 'name', 'email' ],
   */
  fields?: string[]

  /**
   * X OAuth Authorization URL
   * @default 'https://x.com/i/oauth2/authorize?scope=users.read+tweet.read+offline.access'
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
    config = defu(config, useRuntimeConfig(event).oauth?.x, {
      authorizationURL: 'https://x.com/i/oauth2/authorize?scope=users.read+tweet.read+offline.access',
      tokenURL: 'https://api.x.com/2/oauth2/token',
      authorizationParams: {},
    }) as OAuthXConfig
    const query = getQuery(event)
    console.log('navanjr - handling x login', { config, query })

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

    if (!query.code) {
      config.scope = config.scope || []
      // Redirect to X Oauth page
      return sendRedirect(
        event,
        withQuery(config.authorizationURL as string, {
          client_id: config.clientId,
          redirect_uri: redirectUrl,
          scope: config.scope.join(' '),
        }),
      )
    }

    // TODO: improve typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tokens: any = await $fetch(config.tokenURL as string, {
      method: 'POST',
      body: {
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: redirectUrl,
        code: query.code,
      },
    })
    if (tokens.error) {
      const error = createError({
        statusCode: 401,
        message: `X login failed: ${tokens.error || 'Unknown error'}`,
        data: tokens,
      })
      if (!onError) throw error
      return onError(event, error)
    }

    const accessToken = tokens.access_token
    // TODO: improve typing

    config.fields = config.fields || ['id', 'name']
    const fields = config.fields.join(',')

    const user = await ofetch(
      `https://api.x.com/2/users/me?user.fields=profile_image_url`,
    )

    if (!user) {
      throw new Error('X login failed: no user found')
    }

    return onSuccess(event, {
      user,
      tokens,
    })
  })
}
