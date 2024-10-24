<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
  </div>
  <div v-if="loadingStatus" class="flex justify-center items-center mt-10">
    <Loader />
  </div>
  <div v-else>
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else class="flex justify-center items-center mt-10">
      <p>No se encontraron recetas con esta letra.</p>
    </div>
  </div>
</template>

<script setup>
  import { computed, watch } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';
  import MealItem from '../components/MealItem.vue';
  import Loader from '../components/Loader.vue';

  const route = useRoute()
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const meals = computed(() => store.state.mealsByLetter)
  const loadingStatus = computed(() => store.state.loadingStatus)

  watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
  })

</script>