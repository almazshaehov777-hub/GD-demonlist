import { createRouter, createWebHistory } from "vue-router";
import main from './List.vue';
import slayer from './demonSlayers.vue';
import slayerInfo from './slayer.vue';

const routes = [
    { path: '/', component: main },
    { path: '/slayer', component: slayer},
    { path: '/slayerInfo', component: slayerInfo}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;