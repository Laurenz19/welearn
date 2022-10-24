<template>
   <section class="about__achievements">
    <div class="container about__achievements-container">
        <div class="about__achievements-left">
            <img src="@/assets/images/about_achievements.svg">
        </div>
        <div class="about__achievements-right">
            <h1>Achievements</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consequuntur, vero provident modi molestias dignissimos natus voluptate repudiandae inventore ipsum vitae aliquam facilis sapiente deleniti, id, non ratione. Voluptas, dolorem.
            </p>
            <div class="achievement__cards">
                <article
                  v-for="(achievement, index) in achievements"
                  :key="index"
                  class="achievement__card"
                  :class="modeOptions.isDark?'achievement__card-dark':'achievement__card-light'"
                >
                    <span class="achievement__icon" :class="achievement.color">
                    <i class="uil" :class="achievement.icon"></i>
                    </span>
                    <h3>{{achievement.value}}</h3>
                    <p>{{achievement.label}}</p>
                </article>
            </div>
        </div>
    </div>
   </section>

   <section class="team"  :class="modeOptions.isDark?'bg1':'light-bg1'">
    <h2>Meet Our Team</h2>
    <div class="container team__container">
       <article
          v-for="(member, index) in members"
          :key="index"
          class="team__member"
          :class="modeOptions.isDark?'team__member-dark':'team__member-light'"
        >
            <div class="team__member-image">
                <img :src="member.photo">
            </div>
            <div class="team__member-info">
                <h4>{{member.name}}</h4>
                <p>{{member.title}}</p>
            </div>
            <div class="team__member-socials">
                <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram-alt"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
            </div>
        </article>
    </div>
   </section>
</template>

<script setup>
/**
 * import
 */
 import {ref} from 'vue'
 import {useModeOption} from '@/stores/modeOptionStore.js'

 const achievements = ref([
    {
        icon: 'uil-video',
        value:'450+',
        label:'Courses',
        color:'warning'
    },
    {
        icon: 'uil-users-alt',
        value:'79,000+',
        label:'Students',
        color:'danger'
    },
    {
        icon: 'uil-trophy',
        value:'26+',
        label:'Awards',
        color:'success'
    }
 ])

 const members = ref([
    {
        photo:'src/assets/images/tm1.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm2.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm3.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm4.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm5.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm6.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm7.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
    {
        photo:'src/assets/images/tm8.jpg',
        name:'Laurenzio Sambany',
        title:'Web Developer',
    },
 ])

/**
 * Mode Options Handler
 */
 const modeOptions = useModeOption()
</script>
  