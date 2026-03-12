// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  app: {
    baseURL: '/TenantWebsite/', // must match your GitHub repo name
    head: {
      title: 'ISP Management Software',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Complete management platform for ISPs and Cable TV operators. Manage customers, billing, subscriptions, and more.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      style: [
        // Prevent FOUC by hiding content until styles load
        { children: 'html{visibility:hidden}', type: 'text/css' }
      ],
      script: [
        // Show content once DOM is ready
        { children: 'document.addEventListener("DOMContentLoaded",function(){document.documentElement.style.visibility="visible"})' }
      ]
    }
  },

  css: [
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css',
    '@/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Dorex App',
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:5173'
    }
  }
})
