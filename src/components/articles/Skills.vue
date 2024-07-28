<script setup>
import {onMounted} from "vue";
import anime from "animejs";

onMounted(() => {
  document.addEventListener('scroll', function animatable(){
    let scrolled = window.scrollY;
    let desc = document.querySelector('#about-desc')
    let calc = desc.getBoundingClientRect().bottom + desc.offsetTop + (250);

    let animate = anime.timeline({
      autoplay: false
    })
    animate.add({
      targets: '#skills',
      opacity: [0, 1],
      duration: 1000,
      easing: 'spring'
    })

    if (scrolled >= calc){
      animate.play()
      document.removeEventListener('scroll', animatable)
    }
  })
})

</script>

<template>
  <div id="skills" class="h-full flex justify-center text-center">
    <div class="container">
      <div class="flex flex-col h-full">
        <h2 class="m-4">Skills</h2>
        <div id="showcase" class="flex h-52 justify-center">
          <div class="flex-grow">
            <h2>Desktop Application Development</h2>
            <article>
              <p class="mx-24 mt-8 text-center">
                Creating well designed, maintainable, and effecient desktop applications.
                Focusing in documentation, feature implementation, and testability.
              </p>
            </article>
          </div>
          <div class="skills-breaker"></div>
          <div class="flex-grow">
            <h2>Web Development</h2>
            <article>
              <p class="mx-24 mt-8 text-center">
                Fullstack web application development with a higher focus on backend engineering.
                Focusing on secure, robust, and performant applications.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#showcase > div{
  max-width: 50%;
}

.skills-breaker{
  border: 1px solid black;
}
</style>