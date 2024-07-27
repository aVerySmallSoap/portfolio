<script setup>
import Projects from "./components/articles/Projects.vue";
import Sections from "./components/Sections/sections.vue";
import About from "./components/articles/About.vue";
import Hero from "./components/articles/Hero.vue";
</script>

<template>
  <sections>
    <Hero></Hero>
  </sections>

  <sections>
    <About></About>
  </sections>

  <sections>
    <Suspense>
      <Projects/>
      <template #fallback>
        Loading projects...
      </template>
    </Suspense>
  </sections>

</template>

<style scoped>
</style>
