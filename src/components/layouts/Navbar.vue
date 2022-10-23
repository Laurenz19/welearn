<template>
 <nav ref="navRef">
    <div class="container nav__container">
      <router-link to="/"><h4>{{title}}</h4></router-link>
    
      <ul class="nav__menu" v-show="showNavbar">
        <li
          v-for="(route, index) in routes"
          :key="index"
          
        >
           <router-link
              :active-class="!isOnScroll?activeClass.color_1:activeClass.color_2"
              :to="route.path"
            >{{route.name}}</router-link>
        </li>
      </ul>

      <button
        @click="showNavbar = !showNavbar"
        id="openclose__menu"
      >
        <i class="uil uil-bars" :class="showNavbar?'uil-multiply':'uil-bars'"></i>
      </button>
    </div>
    <div class="select__options">
        <span
          @click="optionMode.showModeOptions = !optionMode.showModeOptions"
          class="switch__mode"
        >
            <i class="uil" :class="optionMode.isDark?'uil-moon':'uil-sun'"></i>
        </span>
        <ul class="mode__options" v-if="optionMode.showModeOptions">
            <li @click="optionMode.switchMode(false)">
                <i class="uil uil-sun"></i> <span>Ligth</span>
            </li>
            <li @click="optionMode.switchMode(true)">
                <i class="uil uil-moon"></i> <span>Dark</span>
            </li>
        </ul>
    </div>
 </nav>
</template>

<script setup>
/**
 * import 
 */
 import {ref, watch} from 'vue';
 import {useWindowScroll, useWindowSize} from '@vueuse/core';
 import {useModeOption} from '@/stores/modeOptionStore.js'

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
    },
    activeClass:{
        type: Object,
        required: true
    }
 })

 

/**
 * Navbar Handler
 * useWindowScroll allows us to detect the 
 * scroll event on the browser
 */
 const {x, y} = useWindowScroll()
 const navRef = ref(null)
 const isOnScroll = ref(false)
 watch(y, ()=>{
  if(y.value > 0){
    navRef.value.classList.add('nav__OnScroll')
    isOnScroll.value = true
  }else if(y.value <= 1){
    navRef.value.classList.remove('nav__OnScroll')
    isOnScroll.value = false
  }
 })

 const { width, height } = useWindowSize()
 
 watch(width, ()=>{
    console.log(width.value)
    if(width.value<=1024){
        showNavbar.value = false
    }else{
        showNavbar.value = true
    }
 })

 /*used to switch between burger & close button in a small device*/
 const showNavbar = ref(true)

/**
 * Handle the switch mode option
 */
 const optionMode = useModeOption()

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

/*Select Options*/
.switch__mode{
    position: fixed;
    top:1.6rem;
    right: 5rem;
    cursor: pointer;
}

.mode__options{
    position: fixed;
    right: 5rem;
    top: 5.5rem;
    background: var(--color-bg2);
    border-radius: 0.8rem;
    overflow: hidden;
}

.mode__options li{
   display: flex;
   gap:1.5rem;
   padding: 0.5rem 2rem;
   cursor: pointer;
   font-size: 0.85rem;
   transition: var(--transition);
}

.mode__options li:hover{
  background: var(--color-bg1);
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