<template>
  <div class="terminal-header">
    <ul class="terminal-header-options">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ active: activeTab === option.value }"
        @click="templateStore.setTerminalActiveTab(option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTemplateStore } from '@/stores/template'
import type { TerminalTabOption } from '@/types'

const templateStore = useTemplateStore()

const options: { label: string; value: TerminalTabOption }[] = [
  { label: 'PROBLEMS', value: 'problems' },
  { label: 'TERMINAL', value: 'terminal' },
]

const activeTab = computed<TerminalTabOption>(() => templateStore.terminalConfig.activeTab)
</script>

<style scoped>
.terminal-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.terminal-header-options {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 11px;
  gap: 20px;
  color: var(--vscode-inactive-icon);
  margin: 0 0 0 20px;
  padding: 0;
}
.terminal-header-options li {
  list-style: none;
  cursor: pointer;
  padding: 4px 0;
}
.terminal-header-options li.active,
.terminal-header-options li:hover {
  color: var(--vscode-active-icon);
}

.terminal-header-options li.active {
  border-bottom: 1.6px solid var(--vscode-selected-blue);
}
</style>
