<template>
  <yk-skeleton :animation="isAnimation">
    <yk-space direction="vertical" :style="{ width: '100%' }" size="xl">
      <yk-switch v-model="isAnimation" />
      <yk-skeleton-line :rows="3" />
      <yk-skeleton-shape />
    </yk-space>
  </yk-skeleton>
</template>
<script setup>
import { ref } from 'vue'
const isAnimation = ref(true)
</script>
