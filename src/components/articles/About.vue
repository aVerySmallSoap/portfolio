<script setup>
import {onMounted} from "vue";
import anime from "animejs";

onMounted(() => {
  let animate = anime.timeline()
  animate.add({
    targets: '#about-parent',
    keyframes: [
      {opacity: [0, 1], translateY: [200, 0], duration: 1000},
    ],
    duration: 2500,
    delay: 4500
  })
  animate.add({
    targets: document.querySelector('#about-desc').childNodes,
    keyframes: [
      {opacity: [0, 1], translateY: [200, 0], easing: 'linear', delay: anime.stagger(100)},
    ],
  })
})

</script>

<template>
  <div id="about-parent" class="flex h-full justify-center">
    <div class="container flex flex-grow justify-center">
      <div class="flex flex-col items-center px-24">
        <div class="flex justify-center items-center p-1.5 border border-black rounded-full">
          <img class="w-32 h-32 rounded-full" src="" alt="mod">
        </div>
        <div id="about-desc" class="h-full py-5">
          <span>I'm Lirys Nhoj Roben S. Belleza, a student at Davao Del Norte State College studying BSIT.</span>
          <span>I enjoy creating desktop applications and small web applications.</span>
          <span>I pursue my passion in backend and desktop development through my passion projects.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2{
    font-size: 1.25rem;
  }
  .left-padded{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 1rem;
  }
  .left-padded>span{
    font-size: 1rem;
  }
</style>