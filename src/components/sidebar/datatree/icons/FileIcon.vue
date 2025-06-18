<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="icon === 'info'"
  >
    <circle cx="8" cy="8" r="7" stroke="#42a5f5" stroke-width="1.5" fill="transparent" />
    <path
      d="M8 4.5C8.55 4.5 9 4.95 9 5.5C9 6.05 8.55 6.5 8 6.5C7.45 6.5 7 6.05 7 5.5C7 4.95 7.45 4.5 8 4.5ZM7 12V8H9V12H7Z"
      fill="#42a5f5"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  icon: string
}

defineProps<Props>()
</script>

<style scoped></style>
