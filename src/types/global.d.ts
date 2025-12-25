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

// 为 element-plus 中文本地化模块补充类型声明
declare module 'element-plus/dist/locale/zh-cn.mjs' {
  import type { Language } from 'element-plus'
  const locale: Language
  export default locale
}

export {}

