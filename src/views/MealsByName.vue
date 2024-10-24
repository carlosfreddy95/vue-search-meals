<template>
  <div class="flex justify-center items-center">
    <input type="text" v-model="keyword" class="border border-gray-400 w-60" placeholder="key: 'egg', 'salad'..." @change="searchMeals">
  </div>
  <div v-if="loadingStatus" class="flex justify-center items-center mt-10">
    <Loader />
  </div>
  <div v-else>
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else class="flex justify-center items-center mt-10">
      <p>No se encontraron recetas. Inténtalo de nuevo.</p>
    </div>
  </div>
</template>

<script setup>

  import { computed, ref } from 'vue';
  import store from '../store';
  import MealItem from '../components/MealItem.vue';
  import Loader from '../components/Loader.vue';

  const keyword = ref('')
  const meals = computed(() => store.state.searchedMeals)
  const loadingStatus = computed(() => store.state.loadingStatus)

  function searchMeals() {
    if(keyword.value) {
      store.dispatch('searchMeals', keyword.value)
    }
  }

</script>