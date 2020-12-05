<template>
  <h1>Supense</h1>
  <Suspense>
      <template #default>
          <async-component :timeout="3000"/>
      </template>
      <template #fallback>
          <loading />
      </template>
  </Suspense>
</template>

<script>
import AsyncComponent from './AsyncComponent.vue'
import Loading from './loading.vue'
export default {
  components: { AsyncComponent, Loading },

}
</script>

<style>

</style>