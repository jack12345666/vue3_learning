<template>
  <div class="about">
    <h1>{{number}}</h1>
    <h2>{{state.count}}</h2>
    <button @click="add">增加</button>&nbsp;&nbsp;
    <button @click="reduce">减少</button>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    let number = ref(0)
    let state = reactive({ count: 0 })
    const obj = {
      name: '前端印象',
      age: 22,
      gender: 0
    }
    // 2. 将 obj 对象中属性count的值转化为响应式数据
    const foo = toRefs(obj)
    console.log(foo)

    function add() {
      number.value ++ 
      state.count ++
    }

    function reduce() {
      if(number.value === 0) {
        return
      }
      number.value --
      state.count --
    }

    return {
      number,
      state,
      add,
      reduce
    }
  }
}
</script>
