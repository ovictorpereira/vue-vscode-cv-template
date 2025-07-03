<template>
  <DesktopView />
  <VsCode />
  <div class="windows-bar"></div>
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

.windows-bar {
  height: 60px;
  width: 100%;
  background-color: red;
}
</style>
