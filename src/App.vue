<template>
  <Navbar :title="appName" :routes="routes"/>
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

 /**
 * info store
 * used to store all info inside the website
 */
 const {appName, routes} = useWebsiteStore()


</script>
