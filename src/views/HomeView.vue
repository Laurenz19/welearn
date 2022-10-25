<template>
 
 <header>
  <div class="container header__container">
    <div class="header__left">
        <h1>Grow your skills to andvance your career path</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium laudantium non libero deserunt in architecto! Corporis repellat eligendi qui.
        </p>
        <router-link to="/courses" class="btn-primary" :class="modeOptions.isDark?'btn':'btn__light'">Get Started</router-link>
    </div>
    <div class="header__right">
      <div class="header__right-image">
        <img src="../assets/images/header.svg">
      </div>
    </div>
  </div>
 </header>

 <section class="categories" :class="modeOptions.isDark?'bg1':'light-bg1'">
  <div class="container categories__container">
    <div class="categories__left">
        <h1>Categories</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor ipsum corrupti ea voluptatibus modi in ducimus non sequi numquam. Tenetur sint nihil ut molestiae maiores esse ullam quod tempore.
        </p>
        <a href="#" :class="modeOptions.isDark?'btn':'btn__light'">Learn More</a>
    </div>
    
    <div class="categories__right">
      <article
        v-for="(category, index) in categories"
        :key="index"
        class="category"
        :class="modeOptions.isDark?'category__dark':'category__light'"
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

 <courses-list title="Our Popular Courses" :courses="courses"/>

 <section class="faqs" :class="modeOptions.isDark?'bg1':'light-bg1'">
  <h2>Frequently Asked Questions</h2>
  <div class="container faqs__container">
    <f-a-question
      v-for="nb in 10"
      :key="nb"
      answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam fugiat asperiores nostrum assumenda, quae commodi reiciendis explicabo unde itaque fuga quidem, iure debitis minima vel atque recusandae aperiam nam."
      question="How do I know the right course form me?"
    />
  </div>
 </section>
 <section class="container testimonials__container">
  <h2>Student's Testimonials</h2>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :breakpoints="breakpoints"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(student, index) in testimonials"
      :key="index"
      class="testimonial"
    >
      <div class="avatar" :class="modeOptions.isDark?'avatar__dark':'avatar__light'">
        <img :src="student.avatar">
      </div>
      <div class="testimonial__info">
        <h5>{{student.name}}</h5>
        <small>{{student.title}}</small>
      </div>
      <div class="testimonial__body">{{student.testimonial}}</div>
    </swiper-slide>
  </swiper>
 </section>

</template>

<script setup>
/**
 * import
 */
 import {ref, watch} from 'vue';
 import FAQuestion from '@/components/FAQuestion.vue';
 import CoursesList from '@/components/CoursesList.vue'
 import { Swiper, SwiperSlide } from "swiper/vue";
 import { FreeMode, Pagination } from "swiper";
 import {useModeOption} from '@/stores/modeOptionStore.js'

 /**
 * Categories 
 */
 const categories = ref([
  {
    icon:"uil-bitcoin-circle",
    color:"warning",
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
    color:"danger",
    title:"Music",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
  {
    icon:"uil-puzzle-piece",
    color:"warning",
    title:"Business",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius."
  },
 ])

/**
 * Courses
 * Popular Course Handler
 */
 const courses = ref([
  {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course1.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course2.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course3.jpg"
 },
])

/**
 * Testimonial
 */
 const testimonials = ref([
  {
    avatar:'./images/avatar1.jpg',
    name: 'Laurenzio Sambany',
    title: 'Web Developer',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar2.jpg',
    name: 'John Doe',
    title: 'UI/UX Designer',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar3.jpg',
    name: 'Laurent Sambany',
    title: 'Student',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar4.jpg',
    name: 'Laurenah Sambany',
    title: 'Student',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar5.jpg',
    name: 'Zara Marie',
    title: 'Student',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar6.jpg',
    name: 'Jane Doe',
    title: 'Front-end Developer',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
  {
    avatar:'./images/avatar7.jpg',
    name: 'Priscilla Seva',
    title: 'Student',
    testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem inventore voluptatem quod aperiam impedit, deleniti nemo aliquid, dolore at eveniet tempora, exercitationem similique animi voluptate ipsum veniam quibusdam officia? Perspiciatis.'
  },
 ])

/**
 * Swiper slide handler
 */
 const modules= [FreeMode, Pagination]
 const breakpoints = {
  //when window is >=600px
  600: {
    slidesPerView:2
  }
 }


 /**
  * Mode Option Handler
  */
  const modeOptions = useModeOption()
</script>
