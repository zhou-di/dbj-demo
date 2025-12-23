/**
 * 全局类型定义文件
 */

// 全局环境变量类型
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  // 可以在这里添加更多的环境变量类型
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 全局类型扩展
declare global {
  // 可以在这里添加全局类型定义
}

export {}

