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
      <rect x="1" y="1" width="10" height="22" fill="currentColor" rx="0" />
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
      <line x1="10" x2="10" y1="1" y2="22" stroke="currentColor" stroke-width="2" />
    </template>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
}

defineProps<Props>()
</script>
