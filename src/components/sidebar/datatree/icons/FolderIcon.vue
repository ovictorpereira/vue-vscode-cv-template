<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="folder-icon"
    :style="`transform: rotate(${isOpen ? '90' : '0'}deg)`"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

defineProps<Props>()
</script>

<style>
.folder-icon {
  color: var(--vscode-active-icon);
}
</style>
