<template>
  <div class="h-screen bg-dishes bg-cover flex justify-center items-center">
    <div class="flex flex-col items-center space-y-2 text-white">
      <h1 class="text-7xl font-semibold tracking-wide">Flavory Restaurant</h1>
      <h3 class="text-2xl font-semibold">Here you will find the best recipes in the world</h3>
      <router-link :to="{name: 'byName'}">
        <button class="bg-white hover:bg-slate-200 transition-colors px-4 py-2 text-black">
          Search Meals
        </button>
      </router-link>
      
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import axiosClient from '../axiosClient';

  const ingredients = ref([])

  onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
  })
</script>