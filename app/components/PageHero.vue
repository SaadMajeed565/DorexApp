<script setup lang="ts">
defineProps<{
  badge?: string
  badgeIcon?: string
  title: string
  highlightedText?: string
  subtitle?: string
}>()
</script>

<template>
  <section class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 grid-pattern"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>
    
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <div v-if="badge" class="section-badge mx-auto mb-6 w-fit">
        <Icon v-if="badgeIcon" :name="badgeIcon" class="w-4 h-4" />
        {{ badge }}
      </div>
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        <slot name="title">
          {{ title }}
          <span v-if="highlightedText" class="block gradient-text">{{ highlightedText }}</span>
        </slot>
      </h1>
      <p v-if="subtitle" class="text-xl text-gray-500 max-w-2xl mx-auto">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>

