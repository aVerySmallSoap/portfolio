<script setup>
import {octo} from '../../../.github/action-scripts/persist_octo.js.mjs'
function load() {
  return octo().request('GET /users/{username}/repos', {
    username: "aVerySmallSoap",
  })
}
const repos = await load();
console.log(repos.data)
</script>

<template>
  <div id="projects" class="grid grid-cols-3 grid-flow-row gap-2 mx-2 p-2 justify-items-center overflow-y-auto">
    <div class="border-4 border-gray-700 w-2/3 max-w-md rounded-md transition-all ease-in-out duration-75 hover:-translate-y-0.5 hover:drop-shadow-md" v-for="repo in repos.data">
      <img src="" alt="Github genereated image" class="h-32 rounded-t-lg ">
      <div class="border-t border-t-black-0 max-h-fit p-1">
        <span>{{repo.name}}</span>
        <p>Short desc</p>
        <a v-bind:href="repo.html_url" target="_blank"
           class="border drop-shadow-md transition ease-out hover:bg-blue-400">Check on Github</a>
        <br>
        <span>Used: {{repo.language}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>