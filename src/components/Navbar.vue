<template>
  <div class="flex justify-between items-center text-base font-semibold p-3">
    <router-link :to="{name: 'home'}" class="text-2xl font-bold">
      Home
    </router-link>
    <div class="space-x-4 text-neutral-600">
      <router-link :to="{name: 'byName'}" class="hover:text-black transition duration-300">Search meals</router-link>
      <router-link :to="{name: 'byLetter'}" class="hover:text-black transition duration-300">Meals by letter</router-link>
      <router-link :to="{name: 'ingredients'}"  class="hover:text-black transition duration-300">Meals by ingredients</router-link>
    </div>
  </div>
</template>