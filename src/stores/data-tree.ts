import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PROJECT_NAME } from '@/constants/constants'
import type { TreeNode } from '@/types'

export const useDataTreeStore = defineStore('data-tree', () => {
  const dataTree = ref<TreeNode[]>([
    {
      id: 1,
      label: PROJECT_NAME,
      type: 'folder',
      isOpen: true,
      children: [
        {
          id: 2,
          label: 'github',
          type: 'folder',
          isOpen: false,
          children: [],
        },
        {
          id: 3,
          label: 'README.md',
          type: 'file',
          icon: 'file-text',
          path: '/README.md',
        },
      ],
    },
  ])

  function toggleNodeOpen(id: number, nodes: TreeNode[] = dataTree.value): boolean {
    for (const node of nodes) {
      if (node.id === id) {
        if (typeof node.isOpen === 'boolean') {
          node.isOpen = !node.isOpen
        }
        return true
      }
      if (node.children && node.children.length) {
        if (toggleNodeOpen(id, node.children)) {
          return true
        }
      }
    }
    return false
  }

  return { dataTree, toggleNodeOpen }
})
