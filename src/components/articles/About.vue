<script setup>
import {onMounted} from "vue";
import anime from "animejs";

onMounted(() => {
  document.addEventListener("scroll", function animatable(e) {
    let scrolled = window.scrollY;
    let desc = document.querySelector('#animation-tag')
    let calc = desc.getBoundingClientRect().top + desc.offsetTop;

    let animate = anime.timeline({
      autoplay: false
    })
    animate.add({
      targets: '#about-parent',
      keyframes: [
        {opacity: [0, 1], translateY: [200, 0], duration: 1000},
      ],
      duration: 2500
    })
    animate.add({
      targets: document.querySelector('#about-desc').childNodes,
      keyframes: [
        {opacity: [0, 1], translateY: [200, 0], easing: 'linear', delay: anime.stagger(100)},
      ],
    })

    if (scrolled >= calc){
      animate.play()
      document.removeEventListener('scroll', animatable)
    }
  })
})

</script>

<template>
  <div id="about-parent" class="flex h-full justify-center opacity-0">
    <div class="container flex flex-col flex-grow justify-center">
      <div id="animation-tag" class="flex flex-col items-center px-24">
        <div class="flex justify-center items-center p-1 rounded-full shadow-lg bg-blue-300">
          <img class="w-64 h-64 rounded-full" src="../../assets/prof.jpg" alt="profile">
        </div>
        <h2 class="mt-8 mb-4">
          Lirys Nhoj Roben S. Belleza
        </h2>
        <div id="about-desc" class="mx-24 text-center h-full py-5">
          <span>
            I am an Information Technology student that focuses on desktop application development.
            Fascinated by video games as a kid, I pursued an education for Programming.
            Passionate about learning technology and creating applications.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .left-padded>span{
    font-size: 1rem;
  }
</style>