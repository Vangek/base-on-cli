<template>
  <div  class="app-wrapper" >
    <navbar />
    <div class="app-content">
      <side-bar />
      <app-main />
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { AppMain, Navbar, SideBar } from './components'
import useAppStore from '@/store/modules/app'

const { width } = useWindowSize()
const WIDTH = 992 // refer to Bootstrap's responsive design

watchEffect(() => {
  if (width.value - 1 < WIDTH) {
    useAppStore().toggleDevice('mobile')
    useAppStore().closeSideBar({ withoutAnimation: true })
  } else {
    useAppStore().toggleDevice('desktop')
  }
})

</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .app-content {
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
  }
}
</style>