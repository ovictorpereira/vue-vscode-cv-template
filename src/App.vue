<template>
  <WindowsDesktop />
  <VsCodeApplication />
</template>

<script setup lang="ts">
import VsCodeApplication from '@/components/VsCodeApplication.vue'
import WindowsDesktop from '@/components/WindowsDesktop.vue'
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--vscode-foreground);
  position: relative;
  overflow: hidden;
}
</style>
