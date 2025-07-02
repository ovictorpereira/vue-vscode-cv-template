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

    <div class="terminal-close" @click.stop="templateStore.setVisibility('terminal', false)">
      <svg width="9" height="9" viewBox="0 0 12 12">
        <path
          d="M7.5 6l3.7 3.7-1.5 1.5L6 7.5 2.3 11.2.8 9.7 4.5 6 .8 2.3 2.3.8 6 4.5 9.7.8l1.5 1.5L7.5 6z"
          fill="currentColor"
        />
      </svg>
    </div>
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
  padding: 0 16px;
}
.terminal-header-options {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 11px;
  gap: 20px;
  color: var(--vscode-inactive-icon);
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

.terminal-close {
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.terminal-close:hover {
  background-color: var(--vscode-icon-hover);
}
</style>
