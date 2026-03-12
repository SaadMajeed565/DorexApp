<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const config = useRuntimeConfig()
const appName = config.public.appName

const errorMessages: Record<number, { title: string; description: string; icon: string }> = {
  404: {
    title: 'Page Not Found',
    description: "Oops! The page you're looking for doesn't exist or has been moved.",
    icon: 'ph:map-trifold-duotone'
  },
  500: {
    title: 'Server Error',
    description: "Something went wrong on our end. We're working to fix it.",
    icon: 'ph:warning-circle-duotone'
  },
  403: {
    title: 'Access Denied',
    description: "You don't have permission to access this page.",
    icon: 'ph:lock-duotone'
  }
}

const errorInfo = computed(() => {
  return errorMessages[props.error.statusCode] || {
    title: 'Something Went Wrong',
    description: props.error.message || 'An unexpected error occurred.',
    icon: 'ph:smiley-sad-duotone'
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-white flex items-center justify-center">
    <!-- Background -->
    <div class="absolute inset-0 grid-pattern"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

    <div class="relative text-center px-4">
      <!-- Error Code -->
      <div class="mb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-xl shadow-indigo-500/25 mb-6">
          <Icon :name="errorInfo.icon" class="w-12 h-12 text-white" />
        </div>
        <div class="text-8xl font-bold gradient-text mb-4">{{ error.statusCode }}</div>
      </div>

      <!-- Message -->
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ errorInfo.title }}</h1>
      <p class="text-xl text-gray-500 max-w-md mx-auto mb-10">{{ errorInfo.description }}</p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button @click="handleError" class="btn-primary btn-lg">
          <Icon name="ph:house-duotone" class="w-5 h-5 mr-2" />
          Go Home
        </button>
        <NuxtLink to="/contact" class="btn-secondary btn-lg">
          <Icon name="ph:chat-circle-duotone" class="w-5 h-5 mr-2" />
          Contact Support
        </NuxtLink>
      </div>

      <!-- Fun message -->
      <p class="mt-12 text-sm text-gray-400">
        Lost? Don't worry, even the best ISPs experience outages sometimes. 😊
      </p>
    </div>
  </div>
</template>

<style>
.grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.gradient-text {
  @apply bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent;
}

.btn {
  @apply inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full
         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply btn bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 
         focus:ring-indigo-500 hover:-translate-y-0.5 active:translate-y-0;
}

.btn-secondary {
  @apply btn bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:shadow-md
         focus:ring-gray-400 hover:-translate-y-0.5 active:translate-y-0;
}

.btn-lg {
  @apply px-7 py-3.5 text-base;
}
</style>

