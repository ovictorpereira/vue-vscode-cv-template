<template>
  <div class="desktop-view">
    <div class="desktop-icon" @click="openVsCode">
      <img src="@/assets/images/vscode.svg" alt="VS Code icon" />
      <span>Visual Studio Code</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateStore } from '@/stores/template'
const templateStore = useTemplateStore()
const openVsCode = () => {
  templateStore.vsCodeConfig.isOpen = true
}
</script>

<style scoped>
.desktop-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 1600px;
  max-width: 100%;
  align-self: center;
  align-items: flex-start;
  padding: 20px;
}

.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86px;
  gap: 5px;
  font-size: 13px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

.desktop-icon img {
  width: 56px;
}
</style>
