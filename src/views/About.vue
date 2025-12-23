<template>
  <div class="about">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>关于项目</span>
        </div>
      </template>
      <el-descriptions title="技术栈" :column="2" border>
        <el-descriptions-item label="Vue">3.4.21</el-descriptions-item>
        <el-descriptions-item label="Pinia">2.1.7</el-descriptions-item>
        <el-descriptions-item label="Vue Router">4.3.0</el-descriptions-item>
        <el-descriptions-item label="Element Plus">2.6.3</el-descriptions-item>
        <el-descriptions-item label="构建工具">Vite</el-descriptions-item>
        <el-descriptions-item label="包管理器">npm/pnpm/yarn</el-descriptions-item>
      </el-descriptions>
      
      <el-divider />
      
      <el-alert
        title="项目特性"
        type="success"
        :closable="false"
        show-icon
      >
        <template #default>
          <ul>
            <li>使用 Vue 3 Composition API</li>
            <li>Pinia 状态管理</li>
            <li>Vue Router 路由管理</li>
            <li>Element Plus UI 组件库</li>
            <li>Vite 快速构建工具</li>
          </ul>
        </template>
      </el-alert>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  padding: 20px;
}

.box-card {
  max-width: 1000px;
  margin: 0 auto;
}

.card-header {
  font-weight: bold;
  font-size: 18px;
}

ul {
  margin: 10px 0;
  padding-left: 20px;
}

li {
  margin: 8px 0;
}
</style>

