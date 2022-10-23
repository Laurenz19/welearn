<template>
  <Navbar
    :activeClass="activeClass"
    :routes="routes"
    :title="appName"
  />
  <div class="main__container">
    <RouterView />
  </div>
  <Footer/>
</template>

<script setup>
/**
 * import
 */
 import {RouterView, useRouter } from 'vue-router'
 import Navbar from '@/components/layouts/Navbar.vue'
 import Footer from '@/components/layouts/Footer.vue'
 import {useWebsiteStore} from '@/stores/websiteStore.js'
import { createPinia } from 'pinia';

 /**
 * info store
 * used to store all info inside the website
 */
 const {appName, routes} = useWebsiteStore()
 const activeClass = {
  color_1: "isActive__1",
  color_2: "isActive__2"
 }


</script>
