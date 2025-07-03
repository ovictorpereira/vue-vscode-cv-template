import titleBar from '@/components/TaskBar.vue';
<template>
  <div class="title-bar" @dblclick="toggleFullScreen">
    <div class="titlebar-section options-section">
      <img src="@/assets/images/vscode.svg" id="vscode-logo" alt="VSCode Logo" />
    </div>

    <div class="titlebar-section search-section">
      <SearchBar />
    </div>

    <div class="titlebar-section controls-section">
      <ToggleControls />
      <WindowControls />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchBar from '@/components/titlebar/components/SearchBar.vue'
import ToggleControls from '@/components/titlebar/components/ToggleControls.vue'
import WindowControls from '@/components/titlebar/components/WindowControls.vue'
import { useTemplateStore } from '@/stores/template'

const templateStore = useTemplateStore()
const toggleFullScreen = () => {
  templateStore.vsCodeConfig.isFullScreen = !templateStore.vsCodeConfig.isFullScreen
}
</script>

<style scoped>
.title-bar {
  height: 36px;
  min-height: 36px;
  background-color: var(--vscode-background);
  color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  user-select: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--vscode-border);
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}

#vscode-logo {
  width: 16px;
  height: 16px;
  margin-left: 12px;
}

.titlebar-section {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
  /* margin-right: 8px; */
}

.options-section {
  flex: 1;
}

.search-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.controls-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
