<template>
  <div v-if="loadingStatus" class="flex justify-center items-center mt-10">
    <Loader />
  </div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import MealItem from '../components/MealItem.vue';
  import { useRoute } from 'vue-router';
  import store from '../store';
  import Loader from '../components/Loader.vue';
  
  const route = useRoute()
  const meals = computed(() => store.state.mealsByIngredient)
  const loadingStatus = computed(() => store.state.loadingStatus)

  onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
  })

</script>