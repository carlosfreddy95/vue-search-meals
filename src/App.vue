<template>
  <div>
    <header class="w-full sticky top-0 left-0 bg-white">
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<style scoped>
</style>
