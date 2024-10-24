<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Ingredients</h1>
    <div v-if="loadingStatus" class="flex justify-center items-center mt-10">
      <Loader />
    </div>
    <router-link v-else :to="{name: 'byIngredients', params: { ingredient: ingredient.strIngredient }}" v-for="ingredient of ingredients" :key="ingredient.idIngredient" class="bg-white hover:bg-neutral-100 transition-colors shadow p-3 mb-3 block">
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import Loader from '../components/Loader.vue';

  const ingredients = ref([])
  const loadingStatus = ref(false)

  onMounted(() => {
    loadingStatus.value = true
    axiosClient.get('list.php?i=list')
      .then(({ data }) => {
        ingredients.value = data.meals
        loadingStatus.value = false
      })
  })
</script>