<template>
  <div class="window-controls">
    <div class="window-control" @click="minimizeVsCode">
      <svg width="16" height="16" viewBox="0 0 12 12">
        <path d="M2 6h8v1H2z" fill="currentColor" />
      </svg>
    </div>

    <div class="window-control" @click="toggleFullScreen">
      <svg width="16" height="16" viewBox="0 0 12 12" v-if="isFullScreen">
        <line x1="4" x2="9" y1="1" y2="1" stroke="currentColor" stroke-width="1" />
        <line x1="9" x2="9" y1="1" y2="7" stroke="currentColor" stroke-width="1" />

        <rect
          x="1"
          y="3"
          width="6"
          height="6"
          stroke="currentColor"
          stroke-width="1"
          rx="1"
          fill="transparent"
        />
      </svg>

      <svg width="16" height="16" viewBox="0 0 12 12" v-else>
        <path d="M2 2v8h8V2H2zm7 7H3V3h6v6z" fill="currentColor" />
      </svg>
    </div>

    <div class="window-control window-control-close" @click="closeVsCode">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          d="M7.5 6l3.7 3.7-1.5 1.5L6 7.5 2.3 11.2.8 9.7 4.5 6 .8 2.3 2.3.8 6 4.5 9.7.8l1.5 1.5L7.5 6z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateStore } from '@/stores/template'
import { computed } from 'vue'
const templateStore = useTemplateStore()
const isFullScreen = computed(() => templateStore.vsCodeConfig.isFullScreen)

const minimizeVsCode = () => {
  templateStore.toggleVsCodeMinimized()
}

const toggleFullScreen = () => {
  templateStore.vsCodeConfig.isFullScreen = !templateStore.vsCodeConfig.isFullScreen
}

const closeVsCode = () => {
  templateStore.toggleVsCodeIsOpen()
}
</script>

<style scoped>
.window-controls {
  display: flex;
  height: 100%;
}

.window-control {
  width: 46px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;

  border-top-right-radius: 6px;
}

.window-control:hover {
  background-color: var(--vscode-hover);
}

.window-control-close:hover {
  background-color: #c42b1c;
}
</style>
