<template>
  <RouteHeader title="Explorer" />
  <main class="folder-tree">
    <FolderModel :index="0" :label="PROJECT_NAME" :isOpened="true" />
  </main>
</template>

<script lang="ts" setup>
import RouteHeader from '@/components/sidebar/RouteHeader.vue'
import FolderModel from '@/components/sidebar/FolderModel.vue'
import { PROJECT_NAME } from '@/constants/constants'

// const tree = [
//   {
//     label: 'Explorer',
//     isOpened: true,
//   }
// ]
</script>
