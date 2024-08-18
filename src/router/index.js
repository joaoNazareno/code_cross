import { createRouter, createWebHistory } from 'vue-router';
import TelaPrincipalCodeCross from '../components/tela_principal_code_cross.vue';
import PlayCodeCross from '../components/play_code_cross.vue';

const routes = [
  {
    path: '/principal',
    name: 'principal',
    component: TelaPrincipalCodeCross
  },
  {
    path: '/play',
    name: 'play',
    component: PlayCodeCross
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
