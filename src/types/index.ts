export interface SidebarConfig {
  width: number
  isVisible: boolean
}

export interface TerminalConfig {
  height: number
  isVisible: boolean
}

export type ConfigKey = 'sidebar' | 'terminal'

export type DataType = 'folder' | 'file'

export interface TreeNode {
  id: number
  label: string
  type: DataType
  isOpen?: boolean
  icon?: string
  path?: string
  children?: TreeNode[]
}
