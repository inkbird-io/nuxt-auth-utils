export default defineEventHandler(()=>{
    const {
        DEVENV, 
        NUXT_OAUTH_DISCORD_CLIENT_ID,
        NUXT_OAUTH_DISCORD_CLIENT_SECRET
    } = process.env;
    return { DEVENV, NUXT_OAUTH_DISCORD_CLIENT_ID, NUXT_OAUTH_DISCORD_CLIENT_SECRET }
})