<template>
  <div
    class="terminalbar"
    :class="{ 'terminalbar-border': terminalIsVisible }"
    :style="{ height: terminalIsVisible ? `${terminalHeight}px` : `5px` }"
  >
    <TerminalHeader v-if="terminalIsVisible" />

    <div class="terminal-content" v-if="terminalIsVisible">
      <TerminalProblems v-if="activeTab === 'problems'" />
    </div>

    <TerminalDragbar />
  </div>
</template>

<script lang="ts" setup>
import TerminalDragbar from './TerminalDragbar.vue'
import TerminalHeader from './TerminalHeader.vue'
import TerminalProblems from './tabs/TerminalProblems.vue'
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()

const activeTab = computed(() => templateStore.terminalConfig.activeTab)

const terminalIsVisible = computed(() => templateStore.terminalConfig.isVisible)
const terminalHeight = computed(() => templateStore.terminalConfig.height)
</script>

<style scoped>
.terminalbar {
  width: 100%;
  background-color: var(--vscode-background);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.terminalbar-border {
  border: 1px solid var(--vscode-border);
}

.terminal-content {
  flex: 1;
}
</style>
