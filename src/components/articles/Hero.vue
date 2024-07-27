<script setup>
import anime from "animejs";
import {onMounted, ref} from "vue";
const hero = ref(null);
const secret = ref(0)

onMounted(() => {
  let heroanim = anime.timeline({
    duration: 550,
  })
  heroanim.add({
    targets: hero.value,
    opacity: [0, 1],
    translateY: [-100, 0],
    delay: 550,
  })
  heroanim.add({
    targets: '#hero-break',
    keyframes: [
      {width: [0, '80%'], duration: 1000, easing: 'easeOutExpo'},
      {
        'boxShadow': '0 0 4px 1px rgba(0,0,0,25%)',
        delay: 150,
        easing: 'easeInOutExpo'
      }
    ],
    delay: 200,
  })
  heroanim.add({
    targets: '#quick-mail',
    keyframes: [
      {opacity: [0, 1], translateY: [-20, 0], duration: 1000, easing: 'linear'},
    ],
    duration: 500,
    delay: 500,
  })
})

function coont(){
  secret.value++;
  if(secret.value === 5){
    anime({
      targets: '.falltainer',
      keyframes: [
        {rotateZ: -10, translateY: '+=10'},
        {rotateZ: 15, translateY: '+=25', delay: 200},
        {rotateZ: -15, translateY: '+=28', delay: 250},
        {rotateZ: 20, translateY: '+=35', delay: 300},
        {'boxShadow': '0 0 2px 2px rgba(253, 218, 13, 50%)', delay: 100},
        {'boxShadow': 'none'},
        {'boxShadow': '0 0 2px 2px rgba(253, 218, 13, 50%)', delay: 50},
        {'boxShadow': 'none'},
        {'boxShadow': '0 0 4px 4px rgba(253, 218, 13, 50%)', delay: 200},
      ],
      duration: 2000
    }).finished.then( _ =>
        document.querySelector('.falltainer').style.cursor = "default"
    )
  }
}
</script>

<template>
  <div ref="hero" id="hero-container" class="flex justify-center h-full">
    <div class="hero-intro flex flex-col justify-center">
      <div class="falltainer flex flex-col text-center items-center p-5" @click="coont">
        <h2 class="tracking-widest">Hi, I'm <span>Lirys</span>!</h2>
        <span class="text-gray-500 tracking-wider">An aspiring software engineer</span>
        <span class="text-gray-500 tracking-wider">I create desktop and web applications</span>
        <hr id="hero-break" class="border-black">
      </div>
      <span id="quick-mail" class="text-center text-gray-500">bellezalirys@gmail.com</span>
    </div>
  </div>
</template>

<style scoped>
  .falltainer > h2 {
    text-align: center;
    font-size: 4rem;
  }
  .falltainer > span {
    font-size: 2rem;
  }
  .falltainer:hover{
    cursor: pointer;
  }
</style>