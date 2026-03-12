<script setup lang="ts">
defineProps<{
  quote: string
  author: string
  role: string
  avatar?: string
}>()
</script>

<template>
  <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
    <div class="flex gap-1 mb-6">
      <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="w-5 h-5 text-amber-400" />
    </div>
    <p class="text-gray-600 mb-8 leading-relaxed text-lg">"{{ quote }}"</p>
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
        {{ avatar || author.split(' ').map(n => n[0]).join('') }}
      </div>
      <div>
        <p class="font-semibold text-gray-900">{{ author }}</p>
        <p class="text-sm text-gray-500">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

