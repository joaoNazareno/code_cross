<script setup>
</script>

<template>
  <div class="greetings">
    <a href="https://vuejs.org/" target="_blank" rel="noopener">
      <img alt="Vue logo" class="logo jump" src="/src/assets/play_code_cross.png" width="250px" />
    </a>
  </div>
</template>

<style scoped>
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.logo {
  display: block;
  margin: 0 auto;
}

.jump {
  animation: jump 1s infinite;
}

.jump:hover {
  animation-play-state: paused;
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
