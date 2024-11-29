<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

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
    router.push("/jogo");
  }, 500);
};

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    if (newPath === "/jogo") {
      isLoading.value = false;
    }
  }
);
</script>

<template>
  <div class="greetings">
    <a href="#" @click.prevent="openModal">
      <img
        alt="play"
        class="play"
        src="/src/assets/img/play_code_cross.png"
        width="250px"
      />
    </a>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="closeModal">
          <img src="/src/assets/img/x_code_cross.png" width="30px" />
        </button>
        <img src="/src/assets/img/maps/map_1_.jpg" alt="Mapa" class="map-img" />
        <a href="#" @click.prevent="navigateToPrincipal" class="modal-icon">
          <span class="icon-container">
            <img
              v-if="isLoading"
              src="/src/assets/icons/icon_loading.svg"
              width="50"
              height="50"
              class="icon loading"
              alt="Loading"
            />
            <img
              v-else
              src="/src/assets/icons/icon_login.svg"
              width="50"
              height="50"
              class="icon"
              alt="Login"
            />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "/public/css/modal_play.css";
</style>
