export default oauth.xEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        x: user.name,
      },
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/')
  },
})
