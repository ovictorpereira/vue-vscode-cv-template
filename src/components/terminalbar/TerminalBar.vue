<template>
  <div
    class="terminalbar"
    :class="{ 'terminalbar-border': terminalIsVisible }"
    :style="{ height: terminalIsVisible ? `${terminalHeight}px` : `5px` }"
  >
    <TerminalDragbar />
    <TerminalHeader v-if="terminalIsVisible" />

    <div class="terminal-content" v-if="terminalIsVisible">
      <TerminalProblems v-if="activeTab === 'problems'" />
      <TerminalShell v-else-if="activeTab === 'terminal'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TerminalDragbar from './components/TerminalDragbar.vue'
import TerminalHeader from './components/TerminalHeader.vue'
import TerminalProblems from './tabs/TerminalProblems.vue'
import TerminalShell from './tabs/TerminalShell.vue'
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()

const terminalIsVisible = computed(() => templateStore.terminalConfig.isVisible)
const terminalHeight = computed(() => templateStore.terminalConfig.height)
const activeTab = computed(() => templateStore.terminalConfig.activeTab)
</script>

<style scoped>
.terminalbar {
  width: 100%;
  background-color: var(--vscode-background);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid var(--vscode-border);
}

.terminalbar-border {
  border-top: 1px solid var(--vscode-border);
}

.terminal-content {
  flex: 1;
  overflow: auto;
}
</style>
