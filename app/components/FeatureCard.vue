<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  color?: string
}>()
</script>

<template>
  <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500">
    <div 
      class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br text-white shadow-lg"
      :class="color || 'from-indigo-500 to-purple-500'"
    >
      <Icon :name="icon" class="w-7 h-7" />
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-3">{{ title }}</h3>
    <p class="text-gray-500 leading-relaxed">{{ description }}</p>
    
    <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <Icon name="ph:arrow-up-right-bold" class="w-5 h-5 text-gray-400" />
    </div>
  </div>
</template>

