<template>
  <main class="folder-tree">
    <FolderModel :index="0" :label="PROJECT_NAME" :isOpened="true" />
  </main>
</template>

<script lang="ts" setup>
import FolderModel from '@/components/FolderModel.vue'
import { PROJECT_NAME } from '@/constants/constants'

// const tree = [
//   {
//     label: 'Explorer',
//     isOpened: true,
//   }
// ]
</script>
