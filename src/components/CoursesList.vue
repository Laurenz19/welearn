<template>
<section class="courses">
  <h2>{{title}}</h2>
  <div class="container courses__container">
    <article
      v-for="(course, index) in courses"
      :key="index"
      class="course"
    >
      <div class="course__image">
        <img :src="course.photo">
      </div>
      <div class="course__info">
        <h4>{{course.title}}</h4>
        <p>
        {{course.description}}
        </p>
        <router-link to="/course" class="btn btn-primary">Learn More</router-link>
      </div>
    </article>
  </div>
 </section>
</template>

<script setup>
/**
 * props
 */
 const props = defineProps({
    courses:{
        type:Array,
        default:[]
    },
    title:{
        type:String,
        default:''
    }
 })
</script>