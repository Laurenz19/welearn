/**
 * import
 */
 import {ref} from 'vue'
 import {defineStore} from "pinia"

 export const useModeOption = defineStore('modeOption', ()=>{
    /*State*/
    const isDark = ref(true)
    const showModeOptions = ref(false)

    const switchMode = (mode)=>{
        isDark.value = mode,
        showModeOptions.value = false
    }


    return{
        isDark, switchMode, showModeOptions
    }
})