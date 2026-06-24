import { createRouter, createWebHistory } from "vue-router";
import main from './helloPage.vue';
import slayer from './demonSlayers.vue';
import slayerInfo from './slayer.vue';
import list from './List.vue';

const routes = [
    { path: '/', component: main },
    { path: '/slayer', component: slayer},
    { path: '/slayerInfo', component: slayerInfo},
    { path: '/list', component: list}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;