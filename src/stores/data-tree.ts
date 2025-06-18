import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { TreeNode } from '@/types'

export const useDataTreeStore = defineStore('data-tree', () => {
  const dataTree = ref<TreeNode[]>([
    {
      id: 1,
      label: 'github',
      type: 'folder',
      isOpen: false,
      children: [],
    },
    {
      id: 2,
      label: 'README.md',
      type: 'file',
      icon: 'file-text',
      path: '/README.md',
    },
  ])

  return { dataTree }
})
