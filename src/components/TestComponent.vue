<template>
  <div class="test-component">
    <el-button
      class="btn-primary"
      id="test-btn"
      type="primary"
      size="large"
      disabled
      loading
      @click="handleClick"
      v-if="showButton"
      v-bind:title="buttonTitle"
      v-model="buttonValue"
    >
      Test Button
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showButton = ref(true);
const buttonTitle = ref("Test Button Title");
const buttonValue = ref("");

const handleClick = () => {
  console.log("Button clicked");
};
</script>

<style scoped>
.test-component {
  padding: 20px;
}
</style>
