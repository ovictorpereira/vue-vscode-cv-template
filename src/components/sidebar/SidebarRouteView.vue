<template>
  <div
    class="sidebar-route-view"
    :class="{ 'sidebar-route-view-border': sidebarIsVisible }"
    :style="{ width: sidebarIsVisible ? `${sidebarWidth}px` : `0px` }"
  >
    <RouterView v-if="sidebarIsVisible" />
  </div>
  <SidebarDragbar />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'
import SidebarDragbar from './components/SidebarDragbar.vue'
const templateStore = useTemplateStore()
const sidebarIsVisible = computed(() => templateStore.sidebarConfig.isVisible)
const sidebarWidth = computed(() => templateStore.sidebarConfig.width)
</script>

<style scoped>
.sidebar-route-view {
  height: 100%;
  background-color: var(--vscode-background);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100%;
}

.sidebar-route-view-border {
  border: 1px solid var(--vscode-border);
}
</style>
