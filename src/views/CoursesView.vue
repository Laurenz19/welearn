<template>
   <section>
      <courses-list
        :courses="courses"
        class="courses__list"
        title="All Courses Available"
      /> 
   </section>
   <!-- <courses-list title="All Courses Available" :courses="courses"/> -->
</template>
<script setup>
/**
 * import
 */
 import {ref} from 'vue'
 import CoursesList from '@/components/CoursesList.vue'
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
 {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course4.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course5.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course6.jpg"
 },
 {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course7.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course8.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course9.jpg"
 },
 {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course10.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course11.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course12.jpg"
 },
 {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course13.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course14.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course15.jpg"
 },
 {
    title: "Responsive Social Media Website UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course16.jpg"
 },
 {
    title: "Responsive SmartHome Website Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course17.jpg"
 },
 {
    title: "Responsive Admin Dashboard UI Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet nulla minima nostrum iusto libero explicabo?",
    photo:"./images/course18.jpg"
 },
])

</script>

<style scoped>

.courses__list{
   margin: 0;
   padding: 0;
}
</style>