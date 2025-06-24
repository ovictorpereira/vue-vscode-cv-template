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

    <div
      class="dragbar dragbar-top"
      :class="{ dragging: isDragging }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import TerminalHeader from './TerminalHeader.vue'
import TerminalProblems from './tabs/TerminalProblems.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()

const activeTab = computed(() => templateStore.terminalConfig.activeTab)

const terminalIsVisible = computed(() => templateStore.terminalConfig.isVisible)
const terminalHeight = computed(() => templateStore.terminalConfig.height)

const isDragging = ref<boolean>(false)

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  document.body.style.userSelect = 'none'
  e.preventDefault()
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY

  const windowHeight = window.innerHeight
  const result = windowHeight - clientY

  const minHeight = 70
  const maxHeight = windowHeight * 0.8
  const clampedHeight = Math.max(minHeight, Math.min(result, maxHeight))

  if (result > minHeight) {
    templateStore.setVisibility('terminal', true)
    templateStore.setTerminalHeight(clampedHeight)
  }

  if (result < 50) templateStore.setVisibility('terminal', false)
}

const stopDrag = () => {
  if (isDragging.value) {
    isDragging.value = false
    document.body.style.userSelect = ''
  }
}

onMounted(() => {
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
})
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
