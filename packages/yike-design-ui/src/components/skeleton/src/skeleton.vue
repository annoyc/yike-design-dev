<template>
  <div :class="cls">
    <slot v-if="loading && shouldRender" name="template" />
    <slot v-else />
  </div>
</template>
<script setup lang="ts">
import { computed, Ref, ref, onMounted, watch, toRef } from 'vue'
import { SkeletonProps } from './skeleton'
import '../style'
defineOptions({
  name: 'YkSkeleton',
})
const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: false,
  animation: false,
  throttle: 0,
})

const cls = computed(() => [
  'yk-skeleton',
  {
    ['yk-skeleton-animation']: props.animation,
  },
])

const useThrottleRender = (loading: Ref<boolean>, throttle = 0) => {
  if (throttle === 0) return loading
  const throttled = ref(false)
  let timeoutHandle = 0

  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value
    }, throttle)
  }
  onMounted(dispatchThrottling)

  watch(
    () => loading.value,
    (val) => {
      if (val) {
        dispatchThrottling()
      } else {
        throttled.value = val
      }
    },
  )
  return throttled
}

const shouldRender = useThrottleRender(toRef(props, 'loading'), props.throttle)
</script>
