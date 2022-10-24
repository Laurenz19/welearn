<template>
  <div
    :class="modeOptions.isDark?'bg':'light-bg'"
    class="app"
  >
    <Navbar
      :activeClass="activeClass"
      :routes="routes"
      :title="appName"
    />
    <div class="main__container">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>

<script setup>
/**
 * import
 */
 import {RouterView} from 'vue-router'
 import Navbar from '@/components/layouts/Navbar.vue'
 import Footer from '@/components/layouts/Footer.vue'
 import {useWebsiteStore} from '@/stores/websiteStore.js'
 import {useModeOption} from '@/stores/modeOptionStore.js'

 /**
 * info store
 * used to store all info inside the website
 */
 const {appName, routes} = useWebsiteStore()

/**
 * Mode Options Handler
 */
 const modeOptions = useModeOption()

 
/**
 * active class handler
 */
 const activeClass = {color_1:"isActive__1",color_2: "isActive__2"};




</script>
