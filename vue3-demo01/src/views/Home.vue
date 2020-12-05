<template>
  <div class="home">
    <h3>{{info.title}}</h3>
    <h4>{{foo}}</h4>
   <div v-for="item in names" :key="item">
     {{item}}
   </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
export default {
  name: 'Home',
  data() {
    return {
      foo: 'foo'
    }
  },
  setup() {
    const names = ref(['jack', 'tom', 'jane']) 
    const info = reactive({ title: '测试标题' })

    onMounted(() => {
      console.log('mounted!')
      const { proxy, data } = getCurrentInstance()
      console.log(proxy.names)
      // data.foo = 'test'
      console.log(data.foo)
    })
    
    return {
      names,
      info
    }
  }
}
</script>
