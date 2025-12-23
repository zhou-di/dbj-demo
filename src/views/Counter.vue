<template>
  <div class="counter">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Pinia 计数器示例</span>
        </div>
      </template>
      
      <el-space direction="vertical" alignment="center" :size="30" style="width: 100%">
        <el-statistic title="当前计数" :value="counterStore.count" />
        <el-statistic title="双倍计数" :value="counterStore.doubleCount" />
        
        <el-space>
          <el-button type="danger" :icon="Minus" @click="counterStore.decrement" circle />
          <el-button type="info" :icon="RefreshLeft" @click="counterStore.reset">重置</el-button>
          <el-button type="success" :icon="Plus" @click="counterStore.increment" circle />
        </el-space>
        
        <el-alert
          title="使用 Pinia Store"
          type="info"
          :closable="false"
          show-icon
        >
          <template #default>
            <p>这是使用 Pinia 进行状态管理的示例。</p>
            <p>计数器状态在 store 中管理，可以在任何组件中访问和修改。</p>
          </template>
        </el-alert>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { Minus, Plus, RefreshLeft } from '@element-plus/icons-vue'

const counterStore = useCounterStore()
</script>

<style scoped>
.counter {
  padding: 20px;
}

.box-card {
  max-width: 600px;
  margin: 0 auto;
}

.card-header {
  font-weight: bold;
  font-size: 18px;
}

:deep(.el-statistic__number) {
  font-size: 48px;
}

.el-alert {
  max-width: 500px;
}
</style>

