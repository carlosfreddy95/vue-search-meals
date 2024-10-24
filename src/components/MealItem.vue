<template>
  <div class="bg-white shadow">
    <router-link :to="{name: 'mealDeatils', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-80 object-cover">
    </router-link>
    <div class="space-y-2 p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia ipsa corporis quae consequuntur.</p>
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>

import YoutubeButton from './YoutubeButton.vue';

  const { meal } = defineProps({
    meal: Object
  })

</script>