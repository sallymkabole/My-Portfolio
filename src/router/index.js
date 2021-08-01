import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
