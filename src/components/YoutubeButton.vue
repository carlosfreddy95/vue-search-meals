<template>
  <div>
    <a :href="href" target="_blank">
      <button class="px-3 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
        <slot></slot>
      </button>
    </a>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    href: String
  })
</script>