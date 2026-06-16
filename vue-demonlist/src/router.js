import { createRouter, createWebHistory } from "vue-router";
import main from './List.vue';
import slayer from './demonSlayers.vue';

const routes = [
    { path: '/', component: main },
    { path: '/slayer', component: slayer}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;