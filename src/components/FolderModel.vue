<template>
  <div class="folder-model">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="folder-icon"
      :style="`transform: rotate(${isOpened ? '90' : '0'}deg)`"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>

    <span class="folder-label">
      {{ index === 0 ? label.toUpperCase() : label.toLowerCase() }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpened: boolean
  index: number
  label: string
}

defineProps<Props>()
</script>

<style scoped>
.folder-icon {
  fill: var(--vscode-active-icon);
}
</style>
