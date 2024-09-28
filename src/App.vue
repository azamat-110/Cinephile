<template>
  <transition name="fade" mode="out-in">
    <div class="wrapper" v-if="upcomingList">
      <ProgressIndicator />
      <NavBar />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer />
    </div>
    <Loader v-else />
  </transition>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import ProgressIndicator from "@/components/ProgressIndicator.vue";
import { useUpcoming } from "@/store/upcoming.js";
import { useMovies } from "@/store/movies.js";
import { useSerials } from "@/store/serials.js";
import { useTopMovies} from "@/store/topRated.js";

import { onMounted, computed } from "vue";

const upcomingStore = useUpcoming();
const moviesStore = useMovies();
const serialsStore = useSerials();
const topMoviesStore = useTopMovies();

onMounted(() => {
  setTimeout(() => {
    upcomingStore.getUpcoming();
    moviesStore.getMovies();
    serialsStore.getSerials();
    topMoviesStore.getTopMovies();
  }, 200);
});

const upcomingList = computed(() => {
  return upcomingStore.upcoming?.results;
});

// console.log(upcomingList);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>