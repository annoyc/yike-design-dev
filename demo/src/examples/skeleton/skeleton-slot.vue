<template>
  <yk-skeleton :loading="true">
    <template #template>
      <yk-space size="xl" direction="vertical" style="width: 100%">
        <yk-avatar icon="yk-yike1" size="xl" shape="square"></yk-avatar>
        <yk-skeleton-line
          :widths="['50%', '100%']"
          :rows="2"
        ></yk-skeleton-line>
      </yk-space>
    </template>
  </yk-skeleton>
</template>
