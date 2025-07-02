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

.desktop-icon img {
  width: 50px;
}
</style>
