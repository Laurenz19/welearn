<template>
 <nav ref="navRef">
    <div class="container nav__container">
      <router-link to="/"><h4>{{title}}</h4></router-link>
    
      <ul class="nav__menu" v-show="showNavbar">
        <li
          v-for="(route, index) in routes"
          :key="index"
         
        >
            <router-link :to="route.path">{{route.name}}</router-link>
        </li>
      </ul>

      <button
        @click="showNavbar = !showNavbar"
        id="openclose__menu"
      >
        <i class="uil uil-bars" :class="showNavbar?'uil-multiply':'uil-bars'"></i>
      </button>
    
    </div>
 </nav>
</template>

<script setup>
/**
 * import 
 */
 import {ref, watch} from 'vue';
 import {useWindowScroll, useWindowSize} from '@vueuse/core';

/**
 * props
 */
 const props = defineProps({
    routes:{
        type: Array,
        required:true
    },
    title:{
        type: String,
        default: ''
    }
 })

 

/**
 * Navbar Handler
 * useWindowScroll allows us to detect the 
 * scroll event on the browser
 */
 const {x, y} = useWindowScroll()
 const navRef = ref(null)

 watch(y, ()=>{
  if(y.value > 0){
    navRef.value.classList.add('nav__OnScroll')
  }else if(y.value <= 1){
    navRef.value.classList.remove('nav__OnScroll')
  }
 })

 const { width, height } = useWindowSize()
 
 watch(width, ()=>{
    console.log(width.value)
    if(width.value<1024){
        showNavbar.value = false
    }else{
        showNavbar.value = true
    }
 })

 /*used to switch between burger & close button in a small device*/
 const showNavbar = ref(true)

</script>

<style scoped>
@import "../../assets/css/base.css";

/*Navbar*/
nav{
    background: transparent;
    width: 100vw;
    height: 5rem;
    position: fixed;
    top:0;
    z-index: 11;
}

/*Change the navbar style on sroll using useWindowScroll*/
.nav__OnScroll{
    background: var(--color-primary);
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
}

.nav__container{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav button{
    display: none;
}

.nav__menu{
    display: flex;
    justify-content: space-between;
    gap: 4rem
}

.nav__menu a{
    font-size: 0.9rem;
    transition: var(--transition);
}

.nav__menu a:hover{
    color: var(--color-bg2);
}

/* Media Queries (tablets) */
@media screen and (max-width:1024px) {
    nav button{
        display: inline-block !important;
        background: transparent;
        color: var(--color-white);
        font-size: 1.8rem;
        cursor: pointer;
    }

    .nav__menu{
        position: fixed;
        top:5rem;
        right: 5%;
        flex-direction: column;
        gap: 0;
        height: fit-content;
        width: 15rem;
    }

    .nav__menu li{
        width: 100%;
        height: 4rem;
        animation: animatesNavItem 400ms linear forwards;
        transform-origin: top right;
        opacity: 0;
    }

    .nav__menu li:nth-child(2){
        animation-delay: 200ms;
    }
    .nav__menu li:nth-child(3){
        animation-delay: 400ms;
    }
    .nav__menu li:nth-child(4){
        animation-delay: 600ms;
    }

    @keyframes animatesNavItem {
       0%{
        transform: rotateZ(-90deg) rotateX(90deg) scale(0.1);
       }
       100%{
        transform: rotateZ(0deg) rotateX(0deg) scale(1);
        opacity: 1;
       } 
    }

    .nav__menu a{
        background: var(--color-primary);
        box-shadow: -4rem 6rem 10rem rgba(0,0,0,0.6);
        display: grid;
        width: 100%;
        height: 100%;
        place-items: center;
    }

    .nav__menu a:hover{
        background: var(--color-bg2);
        color: var(--color-white)
    }

}

/* Media Queries (Phone) */
@media screen and (max-width:600px) {
    .nav__menu{
        right: 3% !important;
    }
}
</style>