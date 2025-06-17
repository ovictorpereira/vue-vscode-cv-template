<template>
  <div class="resizable-route-view" :style="{ width: `${width}px` }">
    <div
      class="dragbar"
      :class="{ dragging: isDragging }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const width = ref(300)
const isDragging = ref(false)

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  document.body.style.userSelect = 'none'
  e.preventDefault()
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  let startWidth = 0

  const windowWidth = window.innerWidth

  const app = document.getElementById('app')
  const appWidth = app ? app.offsetWidth : window.innerWidth

  const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX

  if (appWidth == 1600) {
    startWidth = (windowWidth - 1600) / 2 + 45
  } else {
    startWidth = 60
  }

  width.value = clientX - startWidth
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
.resizable-route-view {
  height: 100%;
  background-color: var(--vscode-background);
  border: 1px solid var(--vscode-border);
  position: relative;
  display: flex;
  flex-direction: column;
}

.dragbar {
  width: 3px;
  cursor: ew-resize;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}

.dragging {
  background-color: #0078d4;
}
</style>
