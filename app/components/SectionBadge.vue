<script setup lang="ts">
defineProps<{
  icon?: string
  text: string
}>()
</script>

<template>
  <div class="section-badge">
    <Icon v-if="icon" :name="icon" class="w-4 h-4" />
    {{ text }}
  </div>
</template>

