<template>
    <h1>{{state.count}} * 2 = {{double}}</h1>
    <h2>{{num}}</h2>
    <button @click="add">累加</button>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
export default {
    setup() {
     const state = reactive({
         count: 1
     })
     const num = ref(2)
     
     function add() {
         state.count ++
         num.value += 10
     }

     const double = computed(() => state.count*2)
     
     onMounted(() => {
         state.count = 666
         console.log('mounted')
     })

     return { state, add, double, num }
    }
}
</script>

<style>

</style>