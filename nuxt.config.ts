import Aura from '@primeuix/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@nuxt/icon',
    'nuxt-security',
    '@nuxt/image',
    '@nuxthub/core',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
  ],

  devtools: { enabled: true },

  routeRules: {
    '/api/_hub/**': {
      security: {
        enabled: false,
      },
    },
    '/api/_auth/session': {
      security: {
        enabled: false,
      },
    },
  },

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
          darkModeSelector: '.dark',
        },
      },
    },
    components: {
      exclude: [
        'Editor',
        'Chart',
        'Form',
        'FormField',
      ],
    },
  },
})
