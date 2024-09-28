<template>
  <section class="top__movies">
    <h2 class="top__movies-title">
      ТОП
      <span>10</span>
    </h2>
    <swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperModules.breakpoints"
      space-between="25"
      class="top__movies-swiper"
    >
      <swiper-slide
        class="top__movies-swiper-item"
        v-for="(top, index) in topMovies"
        :key="index"
      >
        <div class="top__movies-swiper-item-info">
          <h5>{{ index + 1 }}</h5>
        </div>
        <img
          :src="`https://image.tmdb.org/t/p/original/` + top?.poster_path"
          alt="slide"
      /></swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ref, onMounted, computed } from "vue";
import { useTopMovies } from "@/store/topRated.js";

const topMoviesStore = useTopMovies();
const modules = ref([Navigation]);
const swiperModules = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 4,
    },
  },
});

const props = defineProps({
  topMovies: Object,
});

const topMovies = computed(() => {
  return topMoviesStore.topMovies;
});

onMounted(() => {
  topMoviesStore.getTopMovies();
});
</script>

<style lang="scss" scoped>
</style>