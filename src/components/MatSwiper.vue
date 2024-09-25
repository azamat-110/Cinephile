<template>
  <section class="mat__section">
    <h2 class="mat__section-title">
      {{ isMovies ? "Фильмы" : "Сереалы" }}
      <img src="@/assets/images/arr.svg" alt="arrow" />
    </h2>
    <swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperModules.breakpoints"
      space-between="25"
      class="mat__section-swiper"
    >
      <swiper-slide class="mat__section-swiper-item" @click="getItem()" v-for="item in movies?.results" :key="item.id">
        <img :src="
          `https://image.tmdb.org/t/p/original/` +
          item.poster_path
        " alt="slide" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ref } from "vue";

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
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
});

const props = defineProps({
  isMovies: true,
  movies: Array,
});

const gettersITEM = (item) => {
  console.log(item);
};
</script>

<style lang="scss" scoped>
.mat__section {
  padding-top: 20px;
  padding-bottom: 50px;

  &-title {
    margin-left: 100px;
    margin-bottom: 40px;
    color: rgb(255, 255, 255);
    font-family: "Raleway";
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    display: flex;
    align-items: center;
    gap: 18px;
    cursor: pointer;
  }

  &-swiper {
    padding-left: 100px;

    &-item {
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      cursor: pointer;
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgb(0, 0, 0, 0.2);
        position: absolute;
      }
      & img {
        user-select: none;
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>