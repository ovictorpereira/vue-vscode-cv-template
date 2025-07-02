<template>
  <DesktopView v-if="!isOpen" />
  <VsCode v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VsCode from '@/views/VsCode.vue'
import DesktopView from '@/views/DesktopView.vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()
const isOpen = computed(() => templateStore.vsCodeConfig.isOpen)
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--vscode-foreground);
  position: relative;
}

/* @media (max-width: 400px) {
  body {
    padding: 0;
  }
} */
</style>
