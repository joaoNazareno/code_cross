<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const showModal = ref(false);
const isLoading = ref(false); 
const router = useRouter();

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const navigateToPrincipal = () => {
  isLoading.value = true; 
  setTimeout(() => {
    closeModal();
    router.push('/jogo');
  }, 500); 
};

watch(() => router.currentRoute.value.path, (newPath) => {
  if (newPath === '/jogo') {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="greetings">
    <a href="#" @click.prevent="openModal">
      <img alt="Vue logo" class="logo jump" src="/src/assets/img/play_code_cross.png" width="250px" />
    </a>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="closeModal">
          <img src="/src/assets/img/x_code_cross.png" width="30px" />
        </button>
        <img src="/src/assets/img/map_code_cross.jpg" alt="Mapa" class="map-img" />
        <a href="#" @click.prevent="navigateToPrincipal" class="modal-icon">
          <span class="icon-container">
            <svg v-if="isLoading" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="icon loading">
              <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="icon">
              <path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path>
              <path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 100vh) {
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  border-radius: 10px;
  padding: 50px; /* Diminui o padding para dar mais espaço à imagem */
  text-align: center;
  position: relative;
  width: 500px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}

.map-img {
  width: 100%;
  max-height: 300px; /* Limite máximo para a altura da imagem */
  object-fit: cover; /* Mantém a proporção da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e os ícones */
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s; 
}

.icon {
  transition: opacity 0.5s, transform 0.5s; 
}

.loading {
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
