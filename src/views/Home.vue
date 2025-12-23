<template>
  <div class="home">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>欢迎使用 Vue3 全家桶项目</span>
        </div>
      </template>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Document /></el-icon>
                <span>Vue 3</span>
              </div>
            </template>
            <p>使用 Vue 3 Composition API 构建</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Management /></el-icon>
                <span>Pinia</span>
              </div>
            </template>
            <p>现代化的状态管理库</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Link /></el-icon>
                <span>Vue Router</span>
              </div>
            </template>
            <p>Vue.js 官方路由管理器</p>
          </el-card>
        </el-col>
      </el-row>
      <el-divider />
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">
                <el-icon><Box /></el-icon>
                <span>Element Plus</span>
              </div>
            </template>
            <p>基于 Vue 3 的组件库</p>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Document, Management, Link, Box } from '@element-plus/icons-vue'
</script>

<style scoped>
.home {
  padding: 20px;
}

.box-card {
  max-width: 1200px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header span {
  margin-left: 10px;
  font-weight: bold;
}
</style>

