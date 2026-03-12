<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Start Free Trial - ISP Management Software',
  description: 'Create your account and start your 14-day free trial. No credit card required. Get started in minutes.',
  ogTitle: 'Start Your Free Trial Today',
  ogDescription: '14 days free, no credit card required. Join 500+ ISPs already using our platform.',
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  password: '',
})

const isLoading = ref(false)
const showPassword = ref(false)

async function handleRegister() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  window.location.href = `${config.public.appUrl || 'http://localhost:5173'}/register`
}
</script>

<template>
  <div class="min-h-[calc(100vh-80px)] flex items-center justify-center py-12">
    <!-- Background -->
    <div class="absolute inset-0 grid-pattern"></div>
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

    <div class="relative w-full max-w-md px-4">
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Start Your Free Trial</h1>
        <p class="text-gray-500">14 days free, no credit card required</p>
      </div>

      <div class="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8">
        <form @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label class="label">Full Name</label>
            <input v-model="form.name" type="text" required class="input" placeholder="Your name">
          </div>

          <div>
            <label class="label">Company / ISP Name</label>
            <input v-model="form.company" type="text" required class="input" placeholder="Your ISP name">
          </div>

          <div>
            <label class="label">Email Address</label>
            <input v-model="form.email" type="email" required class="input" placeholder="you@company.com">
          </div>

          <div>
            <label class="label">Phone Number</label>
            <input v-model="form.phone" type="tel" required class="input" placeholder="+92 300 1234567">
          </div>

          <div>
            <label class="label">Password</label>
            <div class="relative">
              <input 
                v-model="form.password" 
                :type="showPassword ? 'text' : 'password'" 
                required 
                minlength="8"
                class="input pr-12" 
                placeholder="Min. 8 characters"
              >
              <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Icon :name="showPassword ? 'ph:eye-slash-duotone' : 'ph:eye-duotone'" class="w-5 h-5" />
              </button>
            </div>
          </div>

          <button type="submit" :disabled="isLoading" class="btn-primary w-full btn-lg">
            <Icon v-if="isLoading" name="ph:spinner-bold" class="w-5 h-5 mr-2 animate-spin" />
            {{ isLoading ? 'Creating Account...' : 'Start Free Trial' }}
          </button>
        </form>

        <p class="text-xs text-gray-400 text-center mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <p class="text-center mt-8 text-gray-500">
        Already have an account? <NuxtLink to="/login" class="link">Sign in</NuxtLink>
      </p>
    </div>
  </div>
</template>
