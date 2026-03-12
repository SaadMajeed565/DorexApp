<script setup lang="ts">
defineProps<{
  name: string
  description: string
  price: number
  customers: string
  features: string[]
  popular?: boolean
}>()
</script>

<template>
  <div 
    class="relative bg-white rounded-3xl p-8 border-2 transition-all duration-300"
    :class="popular 
      ? 'border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105 z-10' 
      : 'border-gray-100 hover:border-gray-200 hover:shadow-xl'"
  >
    <!-- Popular badge -->
    <div v-if="popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
      <span class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
        Most Popular
      </span>
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ name }}</h3>
      <p class="text-gray-500">{{ description }}</p>
    </div>

    <div class="mb-8">
      <div class="flex items-baseline gap-1">
        <span class="text-4xl font-bold text-gray-900">
          Rs. {{ price.toLocaleString() }}
        </span>
        <span class="text-gray-500">/month</span>
      </div>
      <p class="text-sm text-indigo-600 font-medium mt-2">{{ customers }} customers</p>
    </div>

    <ul class="space-y-4 mb-8">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
        <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon name="ph:check-bold" class="w-3 h-3 text-emerald-600" />
        </div>
        <span class="text-gray-600">{{ feature }}</span>
      </li>
    </ul>

    <NuxtLink 
      to="/register"
      class="w-full justify-center btn-lg"
      :class="popular ? 'btn-primary' : 'btn-secondary'"
    >
      Start Free Trial
    </NuxtLink>
  </div>
</template>

