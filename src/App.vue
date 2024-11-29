<script setup>
import play_code_cross from "./components/play_code_cross.vue";
import footer_code_cross from "./components/footer_code_cross.vue";
</script>

<template>
  <header>
    <img alt="vue_logo" class="logo" src="/src/assets/img/code_cross.png" />
    <div class="play">
      <play_code_cross />
    </div>
  </header>
  <div class="footer">
    <footer_code_cross />
  </div>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped src="/public/css/app.css"></style>
