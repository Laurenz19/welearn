<template>
 <nav ref="navRef">
    <div class="container nav__container">
      <router-link to="/"><h4>WeLearn</h4></router-link>
    
      <ul class="nav__menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/courses">Courses</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
      <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
    
    </div>
 </nav>
 
 <header>
  <div class="container header__container">
    <div class="header__left">
        <h1>Grow your skills to andvance your career path</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium laudantium non libero deserunt in architecto! Corporis repellat eligendi qui.
        </p>
        <router-link to="/courses" class="btn btn-primary">Get Started</router-link>
    </div>
    <div class="header__right">
      <div class="header__right-image">
        <img src="../assets/images/header.svg">
      </div>
    </div>
  </div>
 </header>

 <section class="categories">
  <div class="container categories__container">
    <div class="categories__left">
        <h1>Categories</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor ipsum corrupti ea voluptatibus modi in ducimus non sequi numquam. Tenetur sint nihil ut molestiae maiores esse ullam quod tempore.
        </p>
        <a href="#" class="btn">Learn More</a>
    </div>
    
    <div class="categories__right">
      <article
        v-for="(category, index) in categories"
        :key="index"
        class="category"
      >
        <span class="category__icon" :class="category.color"><i class="uil" :class="category.icon"></i></span>
        <h5>{{category.title}}</h5>
        <p>
        {{category.description}}
        </p>
      </article>
    </div>

  </div>
 </section>
</template>

<script setup>
/**
 * import
 */
 import {ref, watch} from 'vue'
 import {useWindowScroll} from '@vueuse/core'

/**
 * Categories 
 */
 const categories = ref([
  {
    icon:"uil-bitcoin-circle",
    color:"primary",
    title:"Blockchain",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-palette",
    color:"success",
    title:"Graphic Design",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-usd-circle",
    color:"danger",
    title:"Finance",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-megaphone",
    color:"success",
    title:"Marketing",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-music",
    color:"warning",
    title:"Music",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-puzzle-piece",
    color:"primary",
    title:"Business",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
 ])

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
  }else if(y.value == 0){
    navRef.value.classList.remove('nav__OnScroll')
  }
 })

</script>
