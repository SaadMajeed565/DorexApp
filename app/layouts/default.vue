<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div class="relative">
              <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                <Icon name="ph:broadcast-bold" class="w-5 h-5 text-white" />
              </div>
            </div>
            <span class="text-xl font-bold text-gray-900">{{ appName }}</span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-1">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path" 
              class="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
              :class="route.path === link.path 
                ? 'text-indigo-600 bg-indigo-50' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center gap-3">
            <NuxtLink to="/login" class="btn-ghost text-sm">Sign In</NuxtLink>
            <NuxtLink to="/register" class="btn-primary text-sm">
              Get Started
              <Icon name="ph:arrow-right-bold" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <Icon :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
            <nav class="flex flex-col p-4">
              <NuxtLink 
                v-for="link in navLinks" 
                :key="link.path"
                :to="link.path" 
                class="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl" 
                @click="isMenuOpen = false"
              >
                {{ link.name }}
              </NuxtLink>
              <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <NuxtLink to="/login" class="btn-secondary flex-1 text-sm justify-center" @click="isMenuOpen = false">Sign In</NuxtLink>
                <NuxtLink to="/register" class="btn-primary flex-1 text-sm justify-center" @click="isMenuOpen = false">Get Started</NuxtLink>
              </div>
            </nav>
          </div>
        </Transition>
      </div>
    </header>

    <!-- Page Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div class="grid md:grid-cols-5 gap-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:broadcast-bold" class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold">{{ appName }}</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              The complete management platform for ISPs and Cable TV operators. Streamline operations, manage customers, and grow your business.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                <Icon name="ph:twitter-logo-bold" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                <Icon name="ph:linkedin-logo-bold" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                <Icon name="ph:facebook-logo-bold" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              <li><NuxtLink to="/features" class="hover:text-white transition-colors">Features</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-white transition-colors">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
              <li><a href="mailto:careers@dorex.io" class="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:support@dorex.io" class="hover:text-white transition-colors">support@dorex.io</a></li>
              <li><a href="tel:+923001234567" class="hover:text-white transition-colors">+92 300 123 4567</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.</p>
          <div class="flex gap-6 text-sm text-gray-500">
            <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
