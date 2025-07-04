export interface VsCodeConfig {
  isOpen: boolean
  isMinimized: boolean
  isFullScreen: boolean
}

export interface SidebarConfig {
  width: number
  isVisible: boolean
}

export interface TerminalConfig {
  height: number
  isVisible: boolean
  activeTab: TerminalTabOption
}

export type TerminalTabOption = 'problems' | 'terminal'

export type ConfigKey = 'sidebar' | 'terminal'

export type DataType = 'folder' | 'github' | 'readme'

export interface TreeNode {
  id: number
  label: string
  type: DataType
  isOpen?: boolean
  icon?: string
  path?: string
  url?: string
  children?: TreeNode[]
}

export interface Document {
  id: number
  label: string
  url?: string
  content: string
  type: DataType
  path?: string
  isActive: boolean
}
