import { createRouter, createWebHistory } from 'vue-router';
import JogoCodeCross from '../views/jogo_code_cross.vue';

const routes = [
  {
    path: '/jogo',
    name: 'jogo',
    component: JogoCodeCross
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
