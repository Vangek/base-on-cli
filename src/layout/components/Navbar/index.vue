<template>
  <div class="navbar">
    <div class="logo">
      <img :src="logo" alt="logo" class="logo-img" />
    </div>
     <div class="user-settings">
      <el-tag>{{ userRoles }}</el-tag>
      <el-avatar :src="avatar" size="small" />
      <el-dropdown> 
        <span class="user-name">
          {{ userName }}
          <el-icon><CaretBottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
     </div>
  </div>
</template>
<script setup>
import logo from '@/assets/logo/logo3.png'
import avatar from '@/assets/images/avatar.png'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()

const userName = computed(() => userStore.nickName)
const userRoles = computed(() => userStore.userRoles[0].roleName)

const handleLogout = () => {
  ElMessageBox.confirm('确定退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    userStore.logOut().then(() => {
      router.push('/login')
    })
  })
 
}

</script>
<style lang="scss" scoped>
.navbar {
  box-sizing: border-box;
  width: 100vw;
  height: 60px;
  background-color: rgba(255,255,255,1);
  box-shadow: 0px 2px 8px 0px rgba(0,68,160,0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .logo {
    width: 145px;
    .logo-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .user-settings {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    .user-name {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  }
}
</style>