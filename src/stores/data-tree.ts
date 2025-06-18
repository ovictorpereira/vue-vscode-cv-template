import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PROJECT_NAME, GITHUB_USERNAME } from '@/constants/constants'
import type { TreeNode, DataType } from '@/types'
import axios from 'axios'

export const useDataTreeStore = defineStore('data-tree', () => {
  const projectRoot = ref<TreeNode>({
    id: 1,
    label: PROJECT_NAME,
    type: 'folder',
    isOpen: true,
  })

  const dataTree = ref<TreeNode[]>([
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
      icon: 'info',
      path: '/README.md',
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

  function populateNodeChildren(
    id: number,
    childrenData: TreeNode[],
    nodes: TreeNode[] = dataTree.value,
  ): boolean {
    for (const node of nodes) {
      if (node.id === id) {
        node.children = childrenData

        return true
      }

      if (node.children && node.children.length) {
        if (populateNodeChildren(id, childrenData, node.children)) {
          return true
        }
      }
    }
    return false
  }

  const getGithubRepos = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      type GithubRepo = {
        id: number
        name: string
        language: string | null
      }
      const repos = (response.data as GithubRepo[]).map((repo) => ({
        id: repo.id,
        label: repo.name,
        icon: 'github',
        type: 'file' as DataType,
        isOpen: false,
        children: [],
      }))

      const githubNodeId = 2
      populateNodeChildren(githubNodeId, repos)
      console.log(dataTree.value)
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error)
    }
  }

  return { projectRoot, dataTree, toggleNodeOpen, getGithubRepos }
})
