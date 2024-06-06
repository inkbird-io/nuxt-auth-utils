# Changelog


## v0.0.27

[compare changes](https://github.com/inkbird-io/nuxt-auth-utils/compare/v0.0.26...v0.0.27)

## v0.0.26


### 🚀 Enhancements

- Allow users to define custom session factory + types ([#2](https://github.com/inkbird-io/nuxt-auth-utils/pull/2))
- Added google as oauth provider ([#3](https://github.com/inkbird-io/nuxt-auth-utils/pull/3))
- Added twitch as supported oauth provider ([#5](https://github.com/inkbird-io/nuxt-auth-utils/pull/5))
- Added auth0 as oauth provider ([#6](https://github.com/inkbird-io/nuxt-auth-utils/pull/6))
- Added discord auth provider ([#7](https://github.com/inkbird-io/nuxt-auth-utils/pull/7))
- Added oauth battle.net ([#11](https://github.com/inkbird-io/nuxt-auth-utils/pull/11))
- Refactor login buttons to use dropdown ([#14](https://github.com/inkbird-io/nuxt-auth-utils/pull/14))
- Add max_age param for auth0 ([#26](https://github.com/inkbird-io/nuxt-auth-utils/pull/26))
- Added Microsoft as oauth provider ([#8](https://github.com/inkbird-io/nuxt-auth-utils/pull/8))
- Added linkedIn auth provider ([#13](https://github.com/inkbird-io/nuxt-auth-utils/pull/13))
- Add sessionHooks to extend user sessions ([c470319](https://github.com/inkbird-io/nuxt-auth-utils/commit/c470319))
- Added keycloak as oauth provider ([#23](https://github.com/inkbird-io/nuxt-auth-utils/pull/23))
- Add auth0 connection parameter to config ([#39](https://github.com/inkbird-io/nuxt-auth-utils/pull/39))
- Added aws cognito provider ([#36](https://github.com/inkbird-io/nuxt-auth-utils/pull/36))
- Add replaceUserSession() ([#44](https://github.com/inkbird-io/nuxt-auth-utils/pull/44))
- Add authorizationParams in oauth config ([#56](https://github.com/inkbird-io/nuxt-auth-utils/pull/56))
- Generate NUXT_SESSION_PASSWORD and throw if not set in production ([de890ed](https://github.com/inkbird-io/nuxt-auth-utils/commit/de890ed))
- Add `redirectUrl` to OAuthMicrosoftConfig for HTTP vs HTTPS Handling ([50ba6fe](https://github.com/inkbird-io/nuxt-auth-utils/commit/50ba6fe))
- Add opts to requireUserSession for error message and status code customization ([015e847](https://github.com/inkbird-io/nuxt-auth-utils/commit/015e847))
- Add facebook OAuth provider ([777d8b2](https://github.com/inkbird-io/nuxt-auth-utils/commit/777d8b2))
- Add fields support to facebook provider ([8e53936](https://github.com/inkbird-io/nuxt-auth-utils/commit/8e53936))
- Renames project ([9827998](https://github.com/inkbird-io/nuxt-auth-utils/commit/9827998))

### 🩹 Fixes

- Workaround for addServerImportsDir not working ([5a189df](https://github.com/inkbird-io/nuxt-auth-utils/commit/5a189df))
- Don't log warning about password when preparing types ([804057b](https://github.com/inkbird-io/nuxt-auth-utils/commit/804057b))
- Import useRuntimeConfig ([bdbb4b8](https://github.com/inkbird-io/nuxt-auth-utils/commit/bdbb4b8))
- Use import presets ([f16ebc9](https://github.com/inkbird-io/nuxt-auth-utils/commit/f16ebc9))
- **oauth:** Add generic OAuthConfig type ([#18](https://github.com/inkbird-io/nuxt-auth-utils/pull/18))
- Avoid infinite loop with latest Nuxt ([93b949d](https://github.com/inkbird-io/nuxt-auth-utils/commit/93b949d))
- Add audience to auth0 runtime config types ([#27](https://github.com/inkbird-io/nuxt-auth-utils/pull/27))
- Correct arguments for hooks ([6e0193e](https://github.com/inkbird-io/nuxt-auth-utils/commit/6e0193e))
- Replace encoded space characters with regular spaces ([#40](https://github.com/inkbird-io/nuxt-auth-utils/pull/40))
- **google:** Remove `redirectUrl` type ([#52](https://github.com/inkbird-io/nuxt-auth-utils/pull/52))
- UserSession user type augmentation ([#54](https://github.com/inkbird-io/nuxt-auth-utils/pull/54))
- User session types ([#55](https://github.com/inkbird-io/nuxt-auth-utils/pull/55))
- Leverage runtimeConfig to check password ([7c23543](https://github.com/inkbird-io/nuxt-auth-utils/commit/7c23543))
- Leverage NUXT_SESSION_PASSWORD provided at runtime ([4932959](https://github.com/inkbird-io/nuxt-auth-utils/commit/4932959))
- **types:** Narrowed session type passed to fetch session hook ([77c82e7](https://github.com/inkbird-io/nuxt-auth-utils/commit/77c82e7))
- Avoid duplicate trigger of session fetch hook due to request retry ([5fac9a1](https://github.com/inkbird-io/nuxt-auth-utils/commit/5fac9a1))
- Linting ([c0e7088](https://github.com/inkbird-io/nuxt-auth-utils/commit/c0e7088))

### 💅 Refactors

- Use `useSession` generic rather than assertion ([#4](https://github.com/inkbird-io/nuxt-auth-utils/pull/4))

### 📖 Documentation

- Update readme ([06f1504](https://github.com/inkbird-io/nuxt-auth-utils/commit/06f1504))
- Add demo ([cbc8b7a](https://github.com/inkbird-io/nuxt-auth-utils/commit/cbc8b7a))
- Use consistent reference to module ([13daa78](https://github.com/inkbird-io/nuxt-auth-utils/commit/13daa78))
- Add LinkedIn in providers ([c9b9925](https://github.com/inkbird-io/nuxt-auth-utils/commit/c9b9925))
- Update badge colors ([ff868a6](https://github.com/inkbird-io/nuxt-auth-utils/commit/ff868a6))
- Use new nuxi module add command in installation ([d64b9d3](https://github.com/inkbird-io/nuxt-auth-utils/commit/d64b9d3))
- Improve readme ([00c8287](https://github.com/inkbird-io/nuxt-auth-utils/commit/00c8287))
- Removed reference to /api in readme ([#77](https://github.com/inkbird-io/nuxt-auth-utils/pull/77))
- Fix typos ([149448a](https://github.com/inkbird-io/nuxt-auth-utils/commit/149448a))

### 🏡 Chore

- Init ([19caed2](https://github.com/inkbird-io/nuxt-auth-utils/commit/19caed2))
- Add runtime config ([9013484](https://github.com/inkbird-io/nuxt-auth-utils/commit/9013484))
- V0 ([18ea43a](https://github.com/inkbird-io/nuxt-auth-utils/commit/18ea43a))
- Init ([9b75953](https://github.com/inkbird-io/nuxt-auth-utils/commit/9b75953))
- **release:** V0.0.1 ([fd5a2c1](https://github.com/inkbird-io/nuxt-auth-utils/commit/fd5a2c1))
- **release:** V0.0.2 ([f01b412](https://github.com/inkbird-io/nuxt-auth-utils/commit/f01b412))
- Remove `.nuxtrc` ([3f96e97](https://github.com/inkbird-io/nuxt-auth-utils/commit/3f96e97))
- Add type testing script ([e9ffa5e](https://github.com/inkbird-io/nuxt-auth-utils/commit/e9ffa5e))
- Move playground into workspace ([bd8108c](https://github.com/inkbird-io/nuxt-auth-utils/commit/bd8108c))
- Add playground type test ([74f452c](https://github.com/inkbird-io/nuxt-auth-utils/commit/74f452c))
- **release:** V0.0.3 ([9d1342c](https://github.com/inkbird-io/nuxt-auth-utils/commit/9d1342c))
- Add comment ([1923dcc](https://github.com/inkbird-io/nuxt-auth-utils/commit/1923dcc))
- **release:** V0.0.4 ([2bc6f9a](https://github.com/inkbird-io/nuxt-auth-utils/commit/2bc6f9a))
- **release:** V0.0.5 ([86226ad](https://github.com/inkbird-io/nuxt-auth-utils/commit/86226ad))
- Update deps ([05f4a9c](https://github.com/inkbird-io/nuxt-auth-utils/commit/05f4a9c))
- **release:** V0.0.6 ([4eb4f25](https://github.com/inkbird-io/nuxt-auth-utils/commit/4eb4f25))
- Add SameSite=lax ([1b296e2](https://github.com/inkbird-io/nuxt-auth-utils/commit/1b296e2))
- **release:** V0.0.7 ([5316d10](https://github.com/inkbird-io/nuxt-auth-utils/commit/5316d10))
- **playground:** Better with right title ([97a3ad3](https://github.com/inkbird-io/nuxt-auth-utils/commit/97a3ad3))
- **release:** V0.0.8 ([79f7ce7](https://github.com/inkbird-io/nuxt-auth-utils/commit/79f7ce7))
- **release:** V0.0.9 ([36cadda](https://github.com/inkbird-io/nuxt-auth-utils/commit/36cadda))
- Update deps ([bb3a510](https://github.com/inkbird-io/nuxt-auth-utils/commit/bb3a510))
- **release:** V0.0.10 ([c60fde7](https://github.com/inkbird-io/nuxt-auth-utils/commit/c60fde7))
- **release:** V0.0.11 ([b52ed08](https://github.com/inkbird-io/nuxt-auth-utils/commit/b52ed08))
- **release:** V0.0.12 ([a74e7f4](https://github.com/inkbird-io/nuxt-auth-utils/commit/a74e7f4))
- Rename session from verify to fetch ([10694e9](https://github.com/inkbird-io/nuxt-auth-utils/commit/10694e9))
- **release:** V0.0.13 ([e344c98](https://github.com/inkbird-io/nuxt-auth-utils/commit/e344c98))
- Test bundler module resolution ([#32](https://github.com/inkbird-io/nuxt-auth-utils/pull/32))
- Update deps ([9d6b258](https://github.com/inkbird-io/nuxt-auth-utils/commit/9d6b258))
- **release:** V0.0.14 ([1d0d0cc](https://github.com/inkbird-io/nuxt-auth-utils/commit/1d0d0cc))
- Up deps ([a7bd06b](https://github.com/inkbird-io/nuxt-auth-utils/commit/a7bd06b))
- **release:** V0.0.15 ([ec128cc](https://github.com/inkbird-io/nuxt-auth-utils/commit/ec128cc))
- Better server types ([#51](https://github.com/inkbird-io/nuxt-auth-utils/pull/51))
- Update deps ([b930118](https://github.com/inkbird-io/nuxt-auth-utils/commit/b930118))
- **release:** V0.0.16 ([58268d7](https://github.com/inkbird-io/nuxt-auth-utils/commit/58268d7))
- Update deps ([fdaa88c](https://github.com/inkbird-io/nuxt-auth-utils/commit/fdaa88c))
- Add api test route ([9aed7fe](https://github.com/inkbird-io/nuxt-auth-utils/commit/9aed7fe))
- Update deps in playground ([95c657f](https://github.com/inkbird-io/nuxt-auth-utils/commit/95c657f))
- **release:** V0.0.17 ([a814b58](https://github.com/inkbird-io/nuxt-auth-utils/commit/a814b58))
- **release:** V0.0.18 ([ea09e00](https://github.com/inkbird-io/nuxt-auth-utils/commit/ea09e00))
- Fix types ([34dfb7b](https://github.com/inkbird-io/nuxt-auth-utils/commit/34dfb7b))
- **release:** V0.0.19 ([a74c869](https://github.com/inkbird-io/nuxt-auth-utils/commit/a74c869))
- **release:** V0.0.20 ([39ffaae](https://github.com/inkbird-io/nuxt-auth-utils/commit/39ffaae))
- Update deps ([c8b8eb9](https://github.com/inkbird-io/nuxt-auth-utils/commit/c8b8eb9))
- **release:** V0.0.21 ([f4b3512](https://github.com/inkbird-io/nuxt-auth-utils/commit/f4b3512))
- **release:** V0.0.22 ([465e73e](https://github.com/inkbird-io/nuxt-auth-utils/commit/465e73e))
- Migrate to eslint v9 ([964b67b](https://github.com/inkbird-io/nuxt-auth-utils/commit/964b67b))
- Update deps ([a77a334](https://github.com/inkbird-io/nuxt-auth-utils/commit/a77a334))
- Add vscode settings for eslint ([4f1afc9](https://github.com/inkbird-io/nuxt-auth-utils/commit/4f1afc9))
- **release:** V0.0.23 ([b74d47b](https://github.com/inkbird-io/nuxt-auth-utils/commit/b74d47b))
- Update deps ([3e42be4](https://github.com/inkbird-io/nuxt-auth-utils/commit/3e42be4))
- **release:** V0.0.24 ([9063aeb](https://github.com/inkbird-io/nuxt-auth-utils/commit/9063aeb))
- Update to latest `@nuxt/module-builder` ([c9e4ff7](https://github.com/inkbird-io/nuxt-auth-utils/commit/c9e4ff7))
- **release:** V0.0.25 ([7fe6f84](https://github.com/inkbird-io/nuxt-auth-utils/commit/7fe6f84))
- Add packageManager ([c323edc](https://github.com/inkbird-io/nuxt-auth-utils/commit/c323edc))

### 🤖 CI

- Run lint + test actions in ci ([f50c1b5](https://github.com/inkbird-io/nuxt-auth-utils/commit/f50c1b5))

### ❤️ Contributors

- Navanjr <nate@inkbird.io>
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Timi Omoyeni ([@Timibadass](http://github.com/Timibadass))
- Ozan Cakir ([@ozancakir](http://github.com/ozancakir))
- Daniel Roe ([@danielroe](http://github.com/danielroe))
- Adam Hudák ([@adam-hudak](http://github.com/adam-hudak))
- Deth <gabriel@rosa.dev.br>
- Conrawl Rogers <diizzayy@gmail.com>
- Max ([@onmax](http://github.com/onmax))
- Gerben Mulder <github.undergo381@passmail.net>
- André Agro Ferreira ([@andreagroferreira](http://github.com/andreagroferreira))
- Maximilian Götz-Mikus ([@maximilianmikus](http://github.com/maximilianmikus))
- Harlan Wilton ([@harlan-zw](http://github.com/harlan-zw))
- Dvir Hazout <dvir@dazz.io>
- Silvio Eckl <silvio@whitespace.no>
- Ahmed Rangel ([@ahmedrangel](http://github.com/ahmedrangel))
- Yue JIN ([@kingyue737](http://github.com/kingyue737))
- José Manuel Madriaza Caravia ([@LeoMo-27](http://github.com/LeoMo-27))
- H+ ([@justserdar](http://github.com/justserdar))
- Jakub Frelik <j.frelik.it@outlook.com>
- Uģis ([@BerzinsU](http://github.com/BerzinsU))
- Sigve Hansen ([@sifferhans](http://github.com/sifferhans))
- Arash ([@arashsheyda](http://github.com/arashsheyda))
- Samuel LEFEVRE ([@samulefevre](http://github.com/samulefevre))
- Antoine Lassier <toinousp@gmail.com>
- Akshara Hegde ([@aksharahegde](http://github.com/aksharahegde))

## v0.0.25

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.24...v0.0.25)

### 🚀 Enhancements

- Add fields support to facebook provider ([8e53936](https://github.com/Atinux/nuxt-auth-utils/commit/8e53936))

### 🏡 Chore

- Update to latest `@nuxt/module-builder` ([c9e4ff7](https://github.com/Atinux/nuxt-auth-utils/commit/c9e4ff7))

### ❤️ Contributors

- Ozan Cakir ([@ozancakir](http://github.com/ozancakir))
- Daniel Roe ([@danielroe](http://github.com/danielroe))

## v0.0.24

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.23...v0.0.24)

### 🚀 Enhancements

- Add facebook OAuth provider ([777d8b2](https://github.com/Atinux/nuxt-auth-utils/commit/777d8b2))

### 🏡 Chore

- Update deps ([3e42be4](https://github.com/Atinux/nuxt-auth-utils/commit/3e42be4))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Adam Hudák ([@adam-hudak](http://github.com/adam-hudak))

## v0.0.23

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.22...v0.0.23)

### 🚀 Enhancements

- Add opts to requireUserSession for error message and status code customization ([015e847](https://github.com/Atinux/nuxt-auth-utils/commit/015e847))

### 🩹 Fixes

- Avoid duplicate trigger of session fetch hook due to request retry ([5fac9a1](https://github.com/Atinux/nuxt-auth-utils/commit/5fac9a1))

### 📖 Documentation

- Removed reference to /api in readme ([#77](https://github.com/Atinux/nuxt-auth-utils/pull/77))

### 🏡 Chore

- Migrate to eslint v9 ([964b67b](https://github.com/Atinux/nuxt-auth-utils/commit/964b67b))
- Update deps ([a77a334](https://github.com/Atinux/nuxt-auth-utils/commit/a77a334))
- Add vscode settings for eslint ([4f1afc9](https://github.com/Atinux/nuxt-auth-utils/commit/4f1afc9))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Deth <gabriel@rosa.dev.br>
- Conrawl Rogers <diizzayy@gmail.com>
- Daniel Roe ([@danielroe](http://github.com/danielroe))
- Max ([@onmax](http://github.com/onmax))

## v0.0.22

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.21...v0.0.22)

### 🚀 Enhancements

- Add `redirectUrl` to OAuthMicrosoftConfig for HTTP vs HTTPS Handling ([50ba6fe](https://github.com/Atinux/nuxt-auth-utils/commit/50ba6fe))

### 🩹 Fixes

- **types:** Narrowed session type passed to fetch session hook ([77c82e7](https://github.com/Atinux/nuxt-auth-utils/commit/77c82e7))

### 📖 Documentation

- Use new nuxi module add command in installation ([d64b9d3](https://github.com/Atinux/nuxt-auth-utils/commit/d64b9d3))
- Improve readme ([00c8287](https://github.com/Atinux/nuxt-auth-utils/commit/00c8287))

### ❤️ Contributors

- Gerben Mulder <github.undergo381@passmail.net>
- André Agro Ferreira ([@andreagroferreira](http://github.com/andreagroferreira))
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Daniel Roe ([@danielroe](http://github.com/danielroe))

## v0.0.21

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.20...v0.0.21)

### 🏡 Chore

- Update deps ([c8b8eb9](https://github.com/Atinux/nuxt-auth-utils/commit/c8b8eb9))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.20

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.19...v0.0.20)

### 🩹 Fixes

- Leverage NUXT_SESSION_PASSWORD provided at runtime ([4932959](https://github.com/Atinux/nuxt-auth-utils/commit/4932959))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.19

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.18...v0.0.19)

### 🚀 Enhancements

- Generate NUXT_SESSION_PASSWORD and throw if not set in production ([de890ed](https://github.com/Atinux/nuxt-auth-utils/commit/de890ed))

### 🩹 Fixes

- Leverage runtimeConfig to check password ([7c23543](https://github.com/Atinux/nuxt-auth-utils/commit/7c23543))

### 🏡 Chore

- Fix types ([34dfb7b](https://github.com/Atinux/nuxt-auth-utils/commit/34dfb7b))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.18

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.16...v0.0.18)

### 🚀 Enhancements

- Add authorizationParams in oauth config ([#56](https://github.com/Atinux/nuxt-auth-utils/pull/56))

### 🩹 Fixes

- UserSession user type augmentation ([#54](https://github.com/Atinux/nuxt-auth-utils/pull/54))
- User session types ([#55](https://github.com/Atinux/nuxt-auth-utils/pull/55))

### 📖 Documentation

- Update badge colors ([ff868a6](https://github.com/Atinux/nuxt-auth-utils/commit/ff868a6))

### 🏡 Chore

- Update deps ([fdaa88c](https://github.com/Atinux/nuxt-auth-utils/commit/fdaa88c))
- Add api test route ([9aed7fe](https://github.com/Atinux/nuxt-auth-utils/commit/9aed7fe))
- Update deps in playground ([95c657f](https://github.com/Atinux/nuxt-auth-utils/commit/95c657f))
- **release:** V0.0.17 ([a814b58](https://github.com/Atinux/nuxt-auth-utils/commit/a814b58))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Gerben Mulder ([@Gerbuuun](http://github.com/Gerbuuun))

## v0.0.17

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.16...v0.0.17)

### 🩹 Fixes

- UserSession user type augmentation ([#54](https://github.com/Atinux/nuxt-auth-utils/pull/54))

### 🏡 Chore

- Update deps ([fdaa88c](https://github.com/Atinux/nuxt-auth-utils/commit/fdaa88c))
- Add api test route ([9aed7fe](https://github.com/Atinux/nuxt-auth-utils/commit/9aed7fe))
- Update deps in playground ([95c657f](https://github.com/Atinux/nuxt-auth-utils/commit/95c657f))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Gerben Mulder ([@Gerbuuun](http://github.com/Gerbuuun))

## v0.0.16

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.15...v0.0.16)

### 🚀 Enhancements

- Add replaceUserSession() ([#44](https://github.com/Atinux/nuxt-auth-utils/pull/44))

### 🩹 Fixes

- **google:** Remove `redirectUrl` type ([#52](https://github.com/Atinux/nuxt-auth-utils/pull/52))

### 🏡 Chore

- Better server types ([#51](https://github.com/Atinux/nuxt-auth-utils/pull/51))
- Update deps ([b930118](https://github.com/Atinux/nuxt-auth-utils/commit/b930118))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Maximilian Götz-Mikus ([@maximilianmikus](http://github.com/maximilianmikus))
- Harlan Wilton ([@harlan-zw](http://github.com/harlan-zw))

## v0.0.15

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.14...v0.0.15)

### 🚀 Enhancements

- Add auth0 connection parameter to config ([#39](https://github.com/Atinux/nuxt-auth-utils/pull/39))
- Added aws cognito provider ([#36](https://github.com/Atinux/nuxt-auth-utils/pull/36))

### 🩹 Fixes

- Replace encoded space characters with regular spaces ([#40](https://github.com/Atinux/nuxt-auth-utils/pull/40))

### 🏡 Chore

- Up deps ([a7bd06b](https://github.com/Atinux/nuxt-auth-utils/commit/a7bd06b))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Dvir Hazout <dvir@dazz.io>
- Silvio Eckl <silvio@whitespace.no>
- Ahmed Rangel ([@ahmedrangel](http://github.com/ahmedrangel))

## v0.0.14

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.13...v0.0.14)

### 🚀 Enhancements

- Added keycloak as oauth provider ([#23](https://github.com/Atinux/nuxt-auth-utils/pull/23))

### 🏡 Chore

- Test bundler module resolution ([#32](https://github.com/Atinux/nuxt-auth-utils/pull/32))
- Update deps ([9d6b258](https://github.com/Atinux/nuxt-auth-utils/commit/9d6b258))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Yue JIN 
- Daniel Roe <daniel@roe.dev>

## v0.0.13

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.12...v0.0.13)

### 🏡 Chore

- Rename session from verify to fetch ([10694e9](https://github.com/Atinux/nuxt-auth-utils/commit/10694e9))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.12

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.11...v0.0.12)

### 🩹 Fixes

- Correct arguments for hooks ([6e0193e](https://github.com/Atinux/nuxt-auth-utils/commit/6e0193e))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.11

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.10...v0.0.11)

### 🚀 Enhancements

- Add sessionHooks to extend user sessions ([c470319](https://github.com/Atinux/nuxt-auth-utils/commit/c470319))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.10

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.9...v0.0.10)

### 🚀 Enhancements

- Added linkedIn auth provider ([#13](https://github.com/Atinux/nuxt-auth-utils/pull/13))

### 🩹 Fixes

- Add audience to auth0 runtime config types ([#27](https://github.com/Atinux/nuxt-auth-utils/pull/27))

### 📖 Documentation

- Add LinkedIn in providers ([c9b9925](https://github.com/Atinux/nuxt-auth-utils/commit/c9b9925))

### 🏡 Chore

- Update deps ([bb3a510](https://github.com/Atinux/nuxt-auth-utils/commit/bb3a510))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- José Manuel Madriaza Caravia 
- H+ <serdar@justserdar.dev>

## v0.0.9

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.8...v0.0.9)

### 🚀 Enhancements

- Add max_age param for auth0 ([#26](https://github.com/Atinux/nuxt-auth-utils/pull/26))
- Added Microsoft as oauth provider ([#8](https://github.com/Atinux/nuxt-auth-utils/pull/8))

### ❤️ Contributors

- Jakub Frelik <j.frelik.it@outlook.com>
- Uģis ([@BerzinsU](http://github.com/BerzinsU))

## v0.0.8

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.7...v0.0.8)

### 🩹 Fixes

- Avoid infinite loop with latest Nuxt ([93b949d](https://github.com/Atinux/nuxt-auth-utils/commit/93b949d))

### 🏡 Chore

- **playground:** Better with right title ([97a3ad3](https://github.com/Atinux/nuxt-auth-utils/commit/97a3ad3))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.7

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.6...v0.0.7)

### 🩹 Fixes

- **oauth:** Add generic OAuthConfig type ([#18](https://github.com/Atinux/nuxt-auth-utils/pull/18))

### 📖 Documentation

- Use consistent reference to module ([13daa78](https://github.com/Atinux/nuxt-auth-utils/commit/13daa78))

### 🏡 Chore

- Add SameSite=lax ([1b296e2](https://github.com/Atinux/nuxt-auth-utils/commit/1b296e2))

### ❤️ Contributors

- Sigve Hansen ([@sifferhans](http://github.com/sifferhans))
- Daniel Roe <daniel@roe.dev>
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.6

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.5...v0.0.6)

### 🚀 Enhancements

- Added discord auth provider ([#7](https://github.com/Atinux/nuxt-auth-utils/pull/7))
- Added oauth battle.net ([#11](https://github.com/Atinux/nuxt-auth-utils/pull/11))
- Refactor login buttons to use dropdown ([#14](https://github.com/Atinux/nuxt-auth-utils/pull/14))

### 🏡 Chore

- Update deps ([05f4a9c](https://github.com/Atinux/nuxt-auth-utils/commit/05f4a9c))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Arash 
- Samuel LEFEVRE 
- H+ <serdar@darweb.nl>

## v0.0.5

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.4...v0.0.5)

### 🚀 Enhancements

- Added google as oauth provider ([#3](https://github.com/Atinux/nuxt-auth-utils/pull/3))
- Added twitch as supported oauth provider ([#5](https://github.com/Atinux/nuxt-auth-utils/pull/5))
- Added auth0 as oauth provider ([#6](https://github.com/Atinux/nuxt-auth-utils/pull/6))

### 💅 Refactors

- Use `useSession` generic rather than assertion ([#4](https://github.com/Atinux/nuxt-auth-utils/pull/4))

### 📖 Documentation

- Add demo ([cbc8b7a](https://github.com/Atinux/nuxt-auth-utils/commit/cbc8b7a))

### 🏡 Chore

- **release:** V0.0.4 ([2bc6f9a](https://github.com/Atinux/nuxt-auth-utils/commit/2bc6f9a))

### ❤️ Contributors

- Antoine Lassier <toinousp@gmail.com>
- Gerben Mulder ([@Gerbuuun](http://github.com/Gerbuuun))
- Ahmed Rangel ([@ahmedrangel](http://github.com/ahmedrangel))
- Akshara Hegde <akshara.dt@gmail.com>
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))
- Daniel Roe ([@danielroe](http://github.com/danielroe))

## v0.0.4

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.3...v0.0.4)

### 🩹 Fixes

- Use import presets ([f16ebc9](https://github.com/Atinux/nuxt-auth-utils/commit/f16ebc9))

### 🏡 Chore

- **release:** V0.0.3 ([9d1342c](https://github.com/Atinux/nuxt-auth-utils/commit/9d1342c))
- Add comment ([1923dcc](https://github.com/Atinux/nuxt-auth-utils/commit/1923dcc))

### ❤️ Contributors

- Daniel Roe ([@danielroe](http://github.com/danielroe))
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.3

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.2...v0.0.3)

### 🚀 Enhancements

- Allow users to define custom session factory + types ([#2](https://github.com/Atinux/nuxt-auth-utils/pull/2))

### 🩹 Fixes

- Don't log warning about password when preparing types ([804057b](https://github.com/Atinux/nuxt-auth-utils/commit/804057b))
- Import useRuntimeConfig ([bdbb4b8](https://github.com/Atinux/nuxt-auth-utils/commit/bdbb4b8))

### 🏡 Chore

- Remove `.nuxtrc` ([3f96e97](https://github.com/Atinux/nuxt-auth-utils/commit/3f96e97))
- Add type testing script ([e9ffa5e](https://github.com/Atinux/nuxt-auth-utils/commit/e9ffa5e))
- Move playground into workspace ([bd8108c](https://github.com/Atinux/nuxt-auth-utils/commit/bd8108c))
- Add playground type test ([74f452c](https://github.com/Atinux/nuxt-auth-utils/commit/74f452c))

### 🤖 CI

- Run lint + test actions in ci ([f50c1b5](https://github.com/Atinux/nuxt-auth-utils/commit/f50c1b5))

### ❤️ Contributors

- Daniel Roe ([@danielroe](http://github.com/danielroe))
- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

## v0.0.2

[compare changes](https://github.com/Atinux/nuxt-auth-utils/compare/v0.0.1...v0.0.2)

## v0.0.1


### 🩹 Fixes

- Workaround for addServerImportsDir not working ([5a189df](https://github.com/Atinux/nuxt-auth-utils/commit/5a189df))

### 📖 Documentation

- Update readme ([06f1504](https://github.com/Atinux/nuxt-auth-utils/commit/06f1504))

### 🏡 Chore

- Init ([19caed2](https://github.com/Atinux/nuxt-auth-utils/commit/19caed2))
- Add runtime config ([9013484](https://github.com/Atinux/nuxt-auth-utils/commit/9013484))
- V0 ([18ea43a](https://github.com/Atinux/nuxt-auth-utils/commit/18ea43a))
- Init ([9b75953](https://github.com/Atinux/nuxt-auth-utils/commit/9b75953))

### ❤️ Contributors

- Sébastien Chopin ([@Atinux](http://github.com/Atinux))

