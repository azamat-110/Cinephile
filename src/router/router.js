import { createRouter, createWebHashHistory } from 'vue-router';

import MainPage from '@/pages/MainPage.vue';
import MoviesPage from '@/pages/MoviesPage.vue';
import SerialsPage from '@/pages/SerialsPage.vue';
import SearchPage from '@/pages/SearchPage.vue';

const router = createRouter({

    history: createWebHashHistory(),
    routes: [
        { name: MainPage, path: '/', component: MainPage },
        { name: MoviesPage, path: '/movies', component: MoviesPage },
        { name: SerialsPage, path: '/serials', component: SerialsPage },
        { name: SearchPage, path: '/search', component: SearchPage },

    ],
});

export default router;


