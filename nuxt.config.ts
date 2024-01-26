// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  devtools: { enabled: false },
  
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/bulletin-board.svg'
        }
      ]
    }
  },

  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      baseURL: 'http://localhost:3000',
      apiBase: 'http://localhost:8000', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },

  components: [
    {
      path: './components',
      extensions: ['.vue'],
      pathPrefix: false
    }
  ],
  
  pinia: {
    storesDirs: ['./stores/**'],
  },

  modules: [
    '@pinia/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  css: [
    "~/assets/scss/main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})
