<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <el-menu
        :default-active="activeIndex"
        class="app-menu"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item
          v-for="route in menuRoutes"
          :key="route.path"
          :index="route.path"
        >
          {{ route.meta?.title || route.name }}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="app-main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { RouteRecordNormalized } from "vue-router";
import type { RouteMeta } from "@/router/index";

const route = useRoute();
const router = useRouter();

// 当前激活的路由路径
const activeIndex = computed<string>(() => route.path);

// 从路由配置中获取需要显示在菜单中的路由
const menuRoutes = computed<RouteRecordNormalized[]>(() => {
  return router.getRoutes().filter((r) => {
    const meta = r.meta as RouteMeta;
    return meta?.menu !== false && r.path !== "*";
  });
});
</script>

<style lang="scss" scoped>
// 注意：变量、mixins 和函数已经在 vite.config.ts 中全局注入
// 可以直接使用，无需导入

.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 0;
  border-bottom: 1px solid $border-color;
  background-color: #fff;
}

.app-menu {
  border-bottom: none;
}

.app-main {
  flex: 1;
  overflow-y: auto;
  padding: $spacing-lg;
}
</style>
