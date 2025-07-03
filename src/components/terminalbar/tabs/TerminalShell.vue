<template>
  <div class="terminal-shell vertical-scrollbar" @click.stop="commandInput?.focus()">
    <div class="terminal-output">
      <div v-for="(line, index) in commandHistory" :key="index" class="terminal-line">
        <div class="prompt" v-if="line.isCommand">PS {{ TERMINAL_PATH }}&gt;</div>
        <span :class="{ 'command-text': line.isCommand, 'output-text': !line.isCommand }">{{
          line.text
        }}</span>
      </div>
    </div>

    <div class="terminal-input-line">
      <div class="prompt">PS {{ TERMINAL_PATH }}&gt;</div>
      <input
        ref="commandInput"
        v-model="currentCommand"
        class="command-input"
        type="text"
        spellcheck="false"
        autocomplete="off"
        @keydown.enter="executeCommand"
        @keydown.up="navigateHistory(-1)"
        @keydown.down="navigateHistory(1)"
        autofocus
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { TERMINAL_PATH } from '@/constants/constants'
import pkg from '../../../../package.json'

interface CommandLine {
  text: string
  isCommand: boolean
}

const commandInput = ref<HTMLInputElement | null>(null)

const currentCommand = ref('')
const commandHistory = ref<CommandLine[]>([
  {
    text: 'Terminal initialized. Type "help" to see available commands.',
    isCommand: false,
  },
])
const historyCommands = ref<string[]>([])
const historyIndex = ref(-1)

const executeCommand = () => {
  if (!currentCommand.value.trim()) return

  commandHistory.value.push({ text: currentCommand.value, isCommand: true })

  historyCommands.value.push(currentCommand.value)
  historyIndex.value = historyCommands.value.length

  const output = processCommand(currentCommand.value)
  if (output) {
    commandHistory.value.push({ text: output, isCommand: false })
  }

  currentCommand.value = ''

  nextTick(() => {
    const terminal = document.querySelector('.terminal-shell')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  })
}

const processCommand = (command: string): string => {
  const cmd = command.trim().toLowerCase()

  switch (cmd) {
    case 'help':
      return `Available commands:
help     - Display this help
clear    - Clear the terminal
echo     - Display the text after the command
version  - Display the app version`

    case 'clear':
      commandHistory.value = []
      return ''

    case 'version':
      return `Terminal VS Code Template v${pkg.version} - por Victor Pereira`

    default:
      if (cmd.startsWith('echo ')) {
        return cmd.substring(5)
      }
      return `'${command}' is not recognized as an internal or external command, operable program or batch file.`
  }
}

const navigateHistory = (direction: number) => {
  if (historyCommands.value.length === 0) return

  historyIndex.value += direction

  // Verifica os limites do histórico
  if (historyIndex.value < 0) {
    historyIndex.value = 0
  } else if (historyIndex.value >= historyCommands.value.length) {
    historyIndex.value = historyCommands.value.length
    currentCommand.value = ''
  } else {
    currentCommand.value = historyCommands.value[historyIndex.value]
  }
}

onMounted(() => {
  commandInput.value?.focus()
})
</script>

<style scoped>
.terminal-shell {
  height: 100%;
  background-color: var(--vscode-background);
  /* color: #cccccc; */
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  padding: 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.terminal-line {
  display: flex;
  padding: 2px 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.terminal-input-line {
  display: flex;
  padding: 2px 0;
  align-items: center;
}

.prompt {
  color: #569cd6;
  white-space: pre-wrap;
  word-break: break-all;
  margin-right: 4px;
}

.command-input {
  background-color: transparent;
  border: none;
  color: var(--vscode-active-icon);
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 14px;
  flex: 1;
  caret-color: var(--vscode-active-icon);
  outline: none;
  width: 100%;
  word-break: break-word;
}

.command-text {
  color: var(--vscode-active-icon);
}

.output-text {
  color: var(--vscode-active-icon);
}
</style>
