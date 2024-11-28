<script setup>
import play_code_cross from './components/play_code_cross.vue'
</script>

<template>
  <header>
    <img alt="vue_logo" class="logo" src="/src/assets/img/code_cross.png" width="700px" />

    <div class="wrapper">
      <play_code_cross msg="You did it!" />
    </div>
  </header>
    <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}
h5 {
  display: flex;
  place-items: center;
  align-items: center;
  margin-left: 530px;
}

header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 5rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
