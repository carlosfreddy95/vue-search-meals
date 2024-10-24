import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetter
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealsByName
  },
  {
    path: '/by-ingredients/:ingredient',
    name: 'byIngredients',
    component: MealsByIngredients
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: Ingredients
  },
  {
    path: '/meal/:id',
    name: 'mealDeatils',
    component: MealDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router