<template>
    <article class="faq" @click="showAnswer = !showAnswer">
      <div class="faq__icon">
        <i
          :class="showAnswer?'uil-minus':'uil-plus'"
          class="uil"
        ></i>
      </div>
      <div class="question__answer">
        <h4>{{question}}</h4>
        <p :style="showAnswer?{display:'block'}:{display:'none'}">{{answer}}</p>
      </div>
    </article>
</template>

<script setup>
/**
 * import 
 */
 import {ref} from 'vue'

/**
 * props
 */
 const props = defineProps({
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
 })

 const showAnswer = ref(false)
</script>