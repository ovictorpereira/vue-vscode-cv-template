import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Document } from '@/types'
export const useDocumentsStore = defineStore('documents', () => {
  const documents = ref<Document[]>([])

  const documentIsLoading = ref(false)

  const addDocument = async (document: Document) => {
    closeActiveDocument()

    const existingDocument = documents.value.find((doc) => doc.id === document.id)
    if (existingDocument) {
      existingDocument.isActive = true
    } else {
      documents.value.push({
        ...document,
        content: '',
        isActive: true,
      })

      if (document.type === 'github') {
        const content = await addGithubContent(document.url || '')
        documents.value[documents.value.length - 1].content = content
      }
    }
  }

  const addGithubContent = async (url: string) => {
    if (!url) {
      return ''
    }
    documentIsLoading.value = true

    const resp = await axios.get(`${url}/readme`)
    const downloadUrl = resp.data.download_url || null
    if (!downloadUrl) {
      documentIsLoading.value = false
      return ''
    }
    const content = await axios.get(downloadUrl)
    documentIsLoading.value = false
    return content.data
  }

  const closeActiveDocument = () => {
    const activeDocument = documents.value.find((doc) => doc.isActive)
    if (activeDocument) {
      activeDocument.isActive = false
    }
  }

  const openDocument = (id: number) => {
    const document = documents.value.find((doc) => doc.id === id)
    if (document) {
      closeActiveDocument()
      document.isActive = true
    }
  }

  const removeDocument = (id: number) => {
    const index = documents.value.findIndex((doc) => doc.id === id)
    let isActive = false
    if (index !== -1) {
      isActive = documents.value[index].isActive
      documents.value.splice(index, 1)
    }
    if (index - 1 >= 0 && isActive) {
      documents.value[index - 1].isActive = true
    }
  }

  return {
    documentIsLoading,
    addDocument,
    openDocument,
    removeDocument,
    documents,
  }
})
