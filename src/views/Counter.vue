<template>
  <div class="counter">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Pinia 计数器示例</span>
        </div>
      </template>

      <el-space
        direction="vertical"
        alignment="center"
        :size="30"
        style="width: 100%"
      >
        <el-statistic title="当前计数" :value="counterStore.count" />
        <el-statistic title="双倍计数" :value="counterStore.doubleCount" />

        <el-space>
          <el-button
            type="danger"
            :icon="Minus"
            @click="counterStore.decrement"
            circle
          />
          <el-button type="info" :icon="RefreshLeft" @click="counterStore.reset"
            >重置</el-button
          >
          <el-button
            type="success"
            :icon="Plus"
            v-debounce:1000="counterStore.increment"
            circle
            title="延迟执行"
          />
          <el-button
            type="warning"
            :icon="Plus"
            v-debounce:1000.immediate="counterStore.increment"
            circle
            title="立即执行"
          />
        </el-space>

        <el-divider>Input 防抖测试</el-divider>
        <div style="width: 100%">
          <el-input
            v-model="inputText"
            placeholder="尝试快速输入..."
            v-debounce:500.input="handleInput"
          />
          <div style="margin-top: 10px; text-align: left; font-size: 14px">
            <p>实时值 (v-model): {{ inputText }}</p>
            <p>防抖回调值 (500ms): {{ debouncedValue }}</p>
          </div>
        </div>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { Minus, Plus, RefreshLeft } from "@element-plus/icons-vue";
import { ref } from "vue";

const counterStore = useCounterStore();

const inputText = ref("");
const debouncedValue = ref("");

const handleInput = () => {
  debouncedValue.value = inputText.value;
  console.log("Input debounced triggered:", inputText.value);
};
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
