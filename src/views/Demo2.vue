<template>
  <div class="demo-page">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Demo 2</span>
        </div>
      </template>
      <el-empty description="这是一个占位页面，用于 Demo 2" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-page {
  padding: 20px;
}

.card-header {
  font-weight: bold;
  font-size: 18px;
}
</style>

