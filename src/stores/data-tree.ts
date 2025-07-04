import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PROJECT_NAME, GITHUB_USERNAME } from '@/constants/constants'
import type { TreeNode, DataType } from '@/types'
import axios from 'axios'
import { useDocumentsStore } from './documents'

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
      isOpen: true,
      children: [],
    },
    {
      id: 3,
      label: 'README.md',
      type: 'readme',
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
    const documentsStore = useDocumentsStore()
    documentsStore.documentIsLoading = true
    try {
      const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      type GithubRepo = {
        id: number
        name: string
        language: string | null
        url: string
      }
      const repos = (response.data as GithubRepo[]).map((repo) => ({
        id: repo.id,
        label: repo.name,
        url: repo.url,
        language: repo.language,
        path: `/github/${repo.name}`,
        type: 'github' as DataType,
        isOpen: false,
      }))

      const githubNodeId = 2
      populateNodeChildren(githubNodeId, repos)
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error)
    } finally {
      documentsStore.documentIsLoading = false
    }
  }

  return { projectRoot, dataTree, toggleNodeOpen, getGithubRepos }
})
