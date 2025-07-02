<template>
  <div
    class="dragbar dragbar-top"
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

  const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY

  const difference = isFullScreen.value ? 28 : 42

  const windowHeight = window.innerHeight
  const result = windowHeight - clientY - difference

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
