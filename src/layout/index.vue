<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar />
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}

</style>
