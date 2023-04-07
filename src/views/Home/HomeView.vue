<script setup lang="ts">
  import TheWelcome from '../../components/TheWelcome.vue'
  import { useCounterStore } from '@/stores/counter'
  import { storeToRefs } from 'pinia'

  const counterStore = useCounterStore()
  const { count } = storeToRefs(counterStore)
  const { increment } = counterStore
</script>

<template>
  <main>
    <TheWelcome />
    <el-button type="primary" @click="increment">测试{{ count }}</el-button>
    <div class="test-css">测试代码{{ counterStore.doubleCount }}</div>
    <div class="s-=3">sdfjdsafksajfkjasdk fdskl</div>
  </main>
</template>

<style scoped lang="scss">
  .test-css {
    width: 200px;
    color: $test-color;
  }
</style>
