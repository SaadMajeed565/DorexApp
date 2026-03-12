<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Sign In - Access Your Dashboard',
  description: 'Sign in to your ISP management dashboard. Manage customers, view reports, and run your ISP business.',
  robots: 'noindex, nofollow',
})

const form = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)
const showPassword = ref(false)

async function handleLogin() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  window.location.href = `${config.public.appUrl || 'http://localhost:5173'}/login`
}
</script>

<template>
  <div class="min-h-[calc(100vh-80px)] flex items-center justify-center py-12">
    <!-- Background -->
    <div class="absolute inset-0 grid-pattern"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

    <div class="relative w-full max-w-md px-4">
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p class="text-gray-500">Sign in to your account</p>
      </div>

      <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8">
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="label">Email Address</label>
            <input v-model="form.email" type="email" required class="input" placeholder="you@company.com">
          </div>

          <div>
            <label class="label">Password</label>
            <div class="relative">
              <input 
                v-model="form.password" 
                :type="showPassword ? 'text' : 'password'" 
                required 
                class="input pr-12" 
                placeholder="••••••••"
              >
              <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Icon :name="showPassword ? 'ph:eye-slash-duotone' : 'ph:eye-duotone'" class="w-5 h-5" />
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <span class="text-sm text-gray-600">Remember me</span>
            </label>
            <NuxtLink to="/forgot-password" class="text-sm link">Forgot password?</NuxtLink>
          </div>

          <button type="submit" :disabled="isLoading" class="btn-primary w-full btn-lg">
            <Icon v-if="isLoading" name="ph:spinner-bold" class="w-5 h-5 mr-2 animate-spin" />
            {{ isLoading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>
      </div>

      <p class="text-center mt-8 text-gray-500">
        Don't have an account? <NuxtLink to="/register" class="link">Start free trial</NuxtLink>
      </p>
    </div>
  </div>
</template>
