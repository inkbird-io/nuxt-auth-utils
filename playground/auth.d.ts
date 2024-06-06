declare module '#auth-utils' {
  interface User {
    spotify?: string
    github?: string
    google?: string
    twitch?: string
    auth0?: string
    microsoft?: string
    discord?: string
    battledotnet?: string
    keycloak?: string
    linkedin?: string
    cognito?: string
    facebook?: string
    x?: string
  }

  interface UserSession {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extended?: any
    loggedInAt: number
  }
}

export {}
