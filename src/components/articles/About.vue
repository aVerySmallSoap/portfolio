<script setup>

</script>

<template>
  <div id="about" class="flex h-full">
    <div id="about-left" class="flex basis-2/6 flex-wrap ml-4">
      <div class="container">
        <img src="" alt="Profile">
      </div>
      <div class="basis-full">
        <section id="additional">
          <h2>Additional</h2>
          <article class="left-padded">
            <span>1962 Adlaon St., Brgy. Salvacion, Panabo City, Davao Del Norte</span>
          </article>
        </section>
        <section id="socials">
          <h2>Contact & Socials</h2>
          <article class="left-padded">
            <span>+63 9393406559</span>
            <span>bellezalirys@gmail.com</span>
            <span>aVerySmallSoap</span>
            <span>Lirys Belleza</span>
          </article>
        </section>
        <section id="education">
          <h2>Educational Background</h2>
          <article class="left-padded">
            <span>Davao Del Norte State College</span>
            <span>BS Information Technology</span>
            <span>2022-Present</span>
          </article>
          <article class="left-padded">
            <span>Davao City National Highschool</span>
            <span>SHS - Computer Programming & Animation</span>
            <span>2016-2021</span>
          </article>
          <article class="left-padded">
            <span>AFPLC Elementary School</span>
            <span>2010-2016</span>
          </article>
        </section>
      </div>
    </div>
    <div id="about-right" class="basis-1/2">
      <h2>Personal Information</h2>
      <section>
        <article id="introductory">
          <p>
            Hi! I am Lirys Nhoj Roben Saldaña Belleza, an aspiring software engineer.
            I am consistently testing my knowledge and abilities to improve and become
            great in my chosen profession. I have been coding for more than 2 years; Java is my goto
            programming language and I do small web-applications as a backend developer with PHP and Laravel.
          </p>
        </article>
        <article id="dream"></article>
      </section>
      <section>
        
      </section>
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