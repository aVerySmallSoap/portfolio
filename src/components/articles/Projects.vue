<script setup>
import {octo} from '../../../.github/action-scripts/persist_octo.mjs'
function load() {
  return octo().request('GET /users/{username}/repos', {
    username: "aVerySmallSoap",
  })
}
const repos = await load();


</script>

<template>
  <div id="projects" class="flex justify-center">
    <div class="flex flex-col flex-grow  h-full mx-32">
      <h2 class="text-center my-12">
        Projects
      </h2>
      <div class="grid grid-cols-3 gap-y-12 justify-items-center">
        <div class="git-card flex justify-center p-1 min-h-40 min-w-48 shadow-md rounded-lg" v-for="repo in repos.data">
          <div class="flex flex-col flex-grow justify-center text-center items-center text-white">
            <span>{{repo.name}}</span>
            <a v-bind:href="repo.html_url" target="_blank"
               class="git-check shadow-sm p-1 m-1 max-w-42 bg-white text-black rounded-lg">
              Check on Github
            </a>
            <span>Used: {{repo.language}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .git-card{
    background-color: #2b3137;
    border: 1px solid rgba(0,0,0,20%);
  }
  .git-check{
    transition: background-color 200ms ease, transform 200ms ease-out;
    border: 1px solid rgba(0,0,0,20%);
  }
  .git-check:hover{
    background: #2dba4e;
    color: white;
    transform: scale(105%);
  }
</style>