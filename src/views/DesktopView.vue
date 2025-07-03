<template>
  <div class="desktop-view" ref="desktopView">
    <div
      class="desktop-icon"
      ref="desktopIcon"
      :class="{ 'desktop-icon-selected': vsCodeIsSelected }"
      @click="toggleSelection"
      @dblclick="toggleVsCodeIsOpen"
    >
      <img src="@/assets/images/vscode.svg" alt="VS Code icon" />
      <span>Visual Studio Code</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()
const toggleVsCodeIsOpen = () => {
  templateStore.toggleVsCodeIsOpen()
}

const vsCodeIsSelected = ref(false)
const desktopView = ref<HTMLElement | null>(null)
const desktopIcon = ref<HTMLElement | null>(null)

const toggleSelection = () => {
  vsCodeIsSelected.value = !vsCodeIsSelected.value
}

function handleClickOutside(event: MouseEvent) {
  if (desktopIcon.value && !desktopIcon.value.contains(event.target as Node)) {
    vsCodeIsSelected.value = false
  }
  // if (desktopView.value && desktopView.value.contains(event.target as Node)) {
  //   templateStore.vsCodeConfig.isOpen = false
  // }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.desktop-view {
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  align-self: center;
  align-items: flex-start;
  padding: 20px;
  z-index: 1;
  background-color: black;
}

.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86px;
  gap: 5px;
  font-size: 12px;
  user-select: none;
  cursor: auto;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  padding: 4px 0;
}

.desktop-icon:hover {
  background-color: #80818042;
}

.desktop-icon-selected {
  background-color: #8180807d !important;
}

.desktop-icon img {
  width: 50px;
}
</style>
