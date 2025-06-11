<template>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <template v-if="isVisible">
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="2"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
      />
      <rect x="1" y="15" width="22" height="8" fill="currentColor" rx="0 0 2 2" />
    </template>
    <template v-else>
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="2"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
      />
      <line x1="2" y1="16" x2="22" y2="16" stroke="currentColor" stroke-width="2" />
    </template>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
}

defineProps<Props>()
</script>
