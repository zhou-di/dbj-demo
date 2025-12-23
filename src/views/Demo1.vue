<template>
  <div class="demo-page">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Demo 1</span>
        </div>
      </template>
      <el-empty description="这是一个占位页面，用于 Demo 1" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// 可以直接使用全局变量、mixins 和函数
.demo-page {
  padding: $spacing-lg;
  @include flex-center;
}

.card-header {
  font-weight: bold;
  font-size: rem(18); // 使用工具函数转换为 rem
  color: $primary-color;
}
</style>

