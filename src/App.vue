<template>
  <DesktopView />
  <VsCode />
</template>

<script setup lang="ts">
import VsCode from '@/views/VsCode.vue'
import DesktopView from '@/views/DesktopView.vue'
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
