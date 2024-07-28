<script setup>
import Projects from "./components/articles/Projects.vue";
import Sections from "./components/Sections/sections.vue";
import About from "./components/articles/About.vue";
import Hero from "./components/articles/Hero.vue";
import Skills from "./components/articles/Skills.vue";
</script>

<template>
  <div class="flex flex-col">
    <sections>
      <Hero></Hero>
    </sections>

    <sections>
      <About></About>
    </sections>

    <sections class="h-32">
      <Skills></Skills>
    </sections>

    <sections>
      <Suspense>
        <Projects/>
        <template #fallback>
          Loading projects...
        </template>
      </Suspense>
    </sections>
  </div>
</template>

<style scoped>
</style>
