# 项目优化参考

## .npmrc

查看项目中 .npmrc 文件

## token多环境隔离

```js
// 1. 避免 Domain 陷阱: 如果你尝试通过设置 domain 来解决，比如在 Dev 环境强行设置 domain 为 dev.admin.banxueketang.com，这可以防止 Dev 的 Token 跑到 Prod。但是，很难防止 Prod 的 Token (admin.banxueketang.com) 跑进 Dev（因为它是父级）。

// 2. 物理隔离
function getTokenKey() {
  return `Admin-Token-${extractEnvPrefix()}`
}

export function getToken() {
  return Cookies.get(getTokenKey())
}

export function setToken(token) {
  return Cookies.set(getTokenKey(), token)
}

// 获取url中的环境前缀
function extractEnvPrefix() {
  const hostname = window.location.hostname;
  const regex = /^(?:([a-zA-Z0-9-]+)\.)?admin\.banxueketang\.com$/;
  const match = hostname.match(regex);
  if (hostname === 'localhost') {
    return 'local';
  }
  if (match) {
    // match[1] 是环境前缀，如果为 undefined 则表示无前缀（生产环境）
    return match[1] || 'prod';
  }
  return 'unknown';
}
```

---

## Vue3

这是一个使用 Vue3 + Pinia + Vue Router + Element Plus + TypeScript 构建的完整示例项目。

### 技术栈

- **Vue 3.4.21** - 渐进式 JavaScript 框架
- **TypeScript 5.4.3** - JavaScript 的超集，提供类型支持
- **Pinia 2.1.7** - Vue 的状态管理库
- **Vue Router 4.3.0** - Vue.js 官方路由管理器
- **Element Plus 2.6.3** - 基于 Vue 3 的组件库
- **Vite 5.1.6** - 下一代前端构建工具

### 项目结构

```
.
├── src
│   ├── components/      # 组件目录
│   ├── views/          # 页面视图
│   │   ├── Home.vue    # 首页
│   │   ├── About.vue   # 关于页面
│   │   └── Counter.vue # 计数器示例（演示 Pinia）
│   ├── stores/         # Pinia stores
│   │   └── counter.ts  # 计数器 store
│   ├── router/         # 路由配置
│   │   └── index.ts    # 路由定义
│   ├── types/          # 类型定义
│   │   └── global.d.ts # 全局类型定义
│   ├── App.vue         # 根组件
│   ├── main.ts         # 入口文件
│   └── env.d.ts        # 环境类型声明
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
├── tsconfig.json       # TypeScript 配置
├── tsconfig.node.json  # Node.js TypeScript 配置
└── package.json        # 项目依赖
```

### 安装依赖

```bash
npm install
# 或
pnpm install
# 或
yarn install
```

### 开发运行

```bash
npm run dev
# 或
pnpm dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
pnpm build
# 或
yarn build
```

### 预览生产构建

```bash
npm run preview
# 或
pnpm preview
# 或
yarn preview
```

### 功能特性

- ✅ Vue 3 Composition API
- ✅ TypeScript 全类型支持
- ✅ Pinia 状态管理示例
- ✅ Vue Router 路由导航
- ✅ Element Plus UI 组件
- ✅ Vite 快速开发体验
- ✅ 全局类型定义文件

### 示例页面

1. **首页** (`/`) - 展示项目技术栈介绍
2. **关于** (`/about`) - 项目信息和技术栈详情
3. **计数器** (`/counter`) - Pinia 状态管理示例
