<template>
  <div
    class="dragbar dragbar-right"
    :class="{ dragging: isDragging }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()

const isFullScreen = computed(() => templateStore.vsCodeConfig.isFullScreen)

const isDragging = ref<boolean>(false)

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  document.body.style.userSelect = 'none'
  e.preventDefault()
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  let startWidth = 0

  const windowWidth = window.innerWidth
  const app = document.getElementById('vscode-app')
  const appWidth = app ? app.offsetWidth : window.innerWidth
  const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX

  if (isFullScreen.value) startWidth = 45
  else if (appWidth == 1600) startWidth = (windowWidth - 1600) / 2 + 65
  else startWidth = 65

  const result = clientX - startWidth
  if (result > 180) {
    templateStore.setVisibility('sidebar', true)
    templateStore.setSidebarWidth(result)
  }

  if (result < 90) templateStore.setVisibility('sidebar', false)
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

<style scoped></style>
