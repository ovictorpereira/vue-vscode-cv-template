<template>
  <div class="toggle-controls">
    <div
      class="toggle-control"
      @click="templateStore.toggleSidebar()"
      v-tooltip="{
        content: 'Toggle Primary Side Bar (Ctrl+B)',
        ...tbTooltip,
      }"
    >
      <SidebarIcon :is-visible="sidebarIsVisible" />
    </div>

    <div
      class="toggle-control"
      @click="templateStore.toggleTerminal()"
      v-tooltip="{
        content: 'Toggle Panel (Ctrl+J)',
        ...tbTooltip,
      }"
    >
      <TerminalIcon :is-visible="terminalIsVisible" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'
import TerminalIcon from '@/components/taskbar/icons/TerminalIcon.vue'
import SidebarIcon from '@/components/taskbar/icons/SidebarIcon.vue'

const templateStore = useTemplateStore()
const terminalIsVisible = computed(() => templateStore.terminalIsVisible)
const sidebarIsVisible = computed(() => templateStore.sidebarIsVisible)

const tbTooltip = {
  theme: 'custom-tooltip',
  placement: 'bottom',
}
</script>

<style scoped>
.toggle-controls {
  display: flex;
  gap: 6px;
}

.toggle-control {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 2px;
  height: 100%;
  cursor: pointer;
}

.toggle-control:hover {
  background-color: #3c3c3c;
}
</style>
