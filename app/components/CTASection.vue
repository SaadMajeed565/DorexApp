<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

defineProps<{
  title?: string
  subtitle?: string
  primaryText?: string
  primaryLink?: string
  secondaryText?: string
  secondaryLink?: string
  variant?: 'gradient' | 'simple'
}>()
</script>

<template>
  <section :class="variant === 'gradient' ? 'py-24' : 'py-24 bg-gray-50'">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Gradient variant -->
      <div v-if="variant === 'gradient'" class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-20">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div class="relative text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            <slot name="title">{{ title || 'Ready to Transform Your ISP?' }}</slot>
          </h2>
          <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            <slot name="subtitle">{{ subtitle || `Join 500+ ISPs already using ${appName} to streamline operations and grow their business.` }}</slot>
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink :to="primaryLink || '/register'" class="btn bg-white text-indigo-600 hover:bg-gray-100 btn-lg shadow-xl shadow-indigo-900/20">
              {{ primaryText || 'Start Free Trial' }}
              <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
            </NuxtLink>
            <NuxtLink v-if="secondaryText" :to="secondaryLink || '/pricing'" class="btn bg-white/10 text-white hover:bg-white/20 border border-white/20 btn-lg backdrop-blur">
              {{ secondaryText }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Simple variant -->
      <div v-else class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          <slot name="title">{{ title || 'Ready to get started?' }}</slot>
        </h2>
        <p class="text-xl text-gray-500 mb-8">
          <slot name="subtitle">{{ subtitle || 'Start your 14-day free trial. No credit card required.' }}</slot>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="primaryLink || '/register'" class="btn-primary btn-lg">
            {{ primaryText || 'Start Free Trial' }}
            <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
          </NuxtLink>
          <NuxtLink v-if="secondaryText" :to="secondaryLink || '/contact'" class="btn-secondary btn-lg">
            {{ secondaryText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

