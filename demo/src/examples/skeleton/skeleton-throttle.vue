<template>
  <yk-space size="xl" direction="vertical" style="width: 100%">
    <yk-switch v-model="showSkeleton"></yk-switch>
    <yk-skeleton :loading="showSkeleton" :throttle="500" style="width: 100%">
      <template #template>
        <yk-space size="xl" direction="vertical" style="width: 100%">
          <yk-avatar icon="yk-yike1" size="xl" shape="square"></yk-avatar>
          <yk-skeleton-line
            :widths="['50%', '100%']"
            :rows="2"
          ></yk-skeleton-line>
        </yk-space>
      </template>
      <yk-space size="xl" direction="vertical" style="width: 100%">
        <yk-avatar
          img-url="https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png"
          size="xl"
          shape="square"
        ></yk-avatar>
        <p style="width: 50%; margin: 0">
          我是宽度为50%的占位符，我是宽度为50%的占位符
        </p>
        <p style="width: 100%; margin: 0">
          我是宽度为100%的占位符，我是宽度为100%的占位符，我是宽度为100%的占位符，我是宽度为100%的占位符
        </p>
      </yk-space>
    </yk-skeleton>
  </yk-space>
</template>
<script setup>
import { ref } from 'vue'
const showSkeleton = ref(false)
</script>
