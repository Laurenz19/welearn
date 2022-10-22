/**
 * import
 */
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import { defineStore } from "pinia";

export const useWebsiteStore = defineStore('config', ()=>{
    const appName = 'WeLearn'
    const routes = computed(()=>useRouter().options.routes)

    return {appName, routes}
})