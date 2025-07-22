<template>
  <div class="footer-bar">
    <div class="footer-item">UTF-8</div>
    <div class="footer-item">Prettier</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  padding: 0 10px;
  height: 22px;
  min-height: 22px;
  background-color: var(--vscode-background);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: var(--vscode-active);
  font-size: 12px;
  border-left: 1px solid var(--vscode-border);
  border-right: 1px solid var(--vscode-border);
  border-bottom: 1px solid var(--vscode-border);
}

.footer-item {
  display: flex;
  align-items: center;
  padding: 0 5px;
  height: 100%;
  cursor: pointer;
}

.footer-item:hover {
  background-color: #6f6f6f57;
}
</style>
