<template>
  <div v-if="loadingStatus" class="flex justify-center items-center mt-10">
    <Loader />
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div>
      <h1 class="text-4xl font-bold mb-5">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
      <div>
        <p><strong>Category: </strong> {{ meal.strCategory }}</p>
        <p><strong>Area: </strong> {{ meal.strArea }}</p>
        <p><strong>Tags: </strong> {{ meal.strTags || 'none'}}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center space-y-3">
      <h2 class="text-2xl font-bold">¡Lets Start!</h2>
      <p class="text-justify">{{ meal.strInstructions }}</p>
      <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { onMounted } from 'vue';
  import axiosClient from '../axiosClient';
  import { ref } from 'vue'
  import YoutubeButton from '../components/YoutubeButton.vue';
  import Loader from '../components/Loader.vue';

  const route = useRoute()
  const meal = ref({})
  const loadingStatus = ref(false)

  onMounted(() => {
    loadingStatus.value = true
    axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({ data }) => {
        meal.value = data.meals[0] || {}
        loadingStatus.value = false
      })
  })
</script>