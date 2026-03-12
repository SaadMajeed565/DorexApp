<script setup lang="ts">
useSeoMeta({
  title: 'Reset Password',
  description: 'Reset your password to regain access to your ISP management dashboard.',
  robots: 'noindex, nofollow',
})

const email = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

async function handleSubmit() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isLoading.value = false
  isSubmitted.value = true
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
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
        <p class="text-gray-500">Enter your email to receive a reset link</p>
      </div>

      <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8">
        <Transition
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          mode="out-in"
        >
          <div v-if="isSubmitted" class="text-center py-8">
            <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
              <Icon name="ph:envelope-open-duotone" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Check your email</h3>
            <p class="text-gray-500 mb-8">We've sent a password reset link to <span class="font-medium text-gray-900">{{ email }}</span></p>
            <NuxtLink to="/login" class="btn-primary">Back to Sign In</NuxtLink>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="label">Email Address</label>
              <input v-model="email" type="email" required class="input" placeholder="you@company.com">
            </div>

            <button type="submit" :disabled="isLoading" class="btn-primary w-full btn-lg">
              <Icon v-if="isLoading" name="ph:spinner-bold" class="w-5 h-5 mr-2 animate-spin" />
              {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
            </button>
          </form>
        </Transition>
      </div>

      <p class="text-center mt-8 text-gray-500">
        <NuxtLink to="/login" class="link">← Back to Sign In</NuxtLink>
      </p>
    </div>
  </div>
</template>
