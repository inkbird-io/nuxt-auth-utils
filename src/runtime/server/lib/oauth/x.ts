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

    if (!query.code) {
      config.scope = config.scope || []
      const theRequestURL = withQuery(config.authorizationURL as string, {
        client_id: config.clientId,
        redirect_uri: redirectUrl,
        scope: config.scope.join(' '),
        ...config.authorizationParams,
      })
      console.log('navanjr - handling x login', { config, xConfig, query, theRequestURL })
      // Redirect to X Oauth page
      return sendRedirect(
        event,
        theRequestURL,
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

// const testUrl = 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=NVQtY3lYTzh0MFF5eHI0aDhyRTY6MTpjaQ&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fx&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain'

// https://twitter.com/i/oauth2/authorize
// ?client_id=WlFsaFZXNmpZU2lLRlRHWkxBUjM6MTpjaQ
// &redirect_uri=http%3A%2F%2F127.0.0.1%2Foauth%2Fcallback
// &response_type=code
// &scope=tweet.read+follows.read+mute.read+like.read+block.read+offline.access
// &state=0-rsJAIDgALlYWs0SDQNIUWwzniGEGFfHy-OpbugHmw%3D
// &code_challenge=challenge
// &code_challenge_method=plain

// https://twitter.com/i/oauth2/authorize
// ?client_id=NVQtY3lYTzh0MFF5eHI0aDhyRTY6MTpjaQ
// &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fx
// &scope=tweet.read+users.read+offline.access
// &response_type=code
// &code_challenge=challenge
// &code_challenge_method=plain
