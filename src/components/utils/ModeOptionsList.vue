<template>
   <li
     
   >
        <i class="uil" :class="option.icon"></i> <span>{{option.title}}</span>
   </li>
</template>

<script setup>
/**
 * import
 */
 import {useModeOption} from '@/stores/modeOptionStore.js'


 const props = defineProps({
    option:{
        type:Object,
        required: true
    }
 })

/**
 * Handle the switch mode option
 */
 const modeOptions = useModeOption()
</script>