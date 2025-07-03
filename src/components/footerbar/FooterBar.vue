<template>
  <div class="footer-bar"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  min-height: 25px;
  background-color: var(--vscode-background);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: var(--vscode-active-icon);
  font-size: 13px;
  border-left: 1px solid var(--vscode-border);
  border-right: 1px solid var(--vscode-border);
  border-bottom: 1px solid var(--vscode-border);
}
</style>
