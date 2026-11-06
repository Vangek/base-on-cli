<template>
  <div class="sidebar">
    <div
      v-for="item in menu"
      :key="item.path"
      class="sidebar-item"
      :class="{ 'sidebar-item-active': activePath === item.path }"
      @click="router.push(item.path)"
    >
      <el-icon><component :is="item.meta.icon" /></el-icon>
      {{ item.meta.title }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sideMenuList } from '@/router/menu'

const menu = computed(() => sideMenuList)
const currentRoute = useRoute()
const router = useRouter()
const activePath = computed(() => currentRoute.path)
</script>

<style scoped lang="scss">
.sidebar {
  width: 232px;
  height: calc(100vh - 60px);
  background-color: #fff;
  border: 1px solid rgba(224, 224, 224, 1);
  box-sizing: border-box;
  padding: 20px 16px;

  .sidebar-item {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #fff;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .sidebar-item:hover,
  .sidebar-item-active {
    background: linear-gradient(135.95deg, rgba(251, 253, 255, 1) -1.09%, rgba(237, 246, 255, 1) 96.6%);
    color: rgba(0, 142, 224, 1);
    border-radius: 10px;
  }
}
</style>