<template>
  <div>
    <header class="header main-page-header">
      <img
        :src="
          `https://image.tmdb.org/t/p/original/` +
          upcomingList[slide]?.backdrop_path
        "
        alt="header_bg"
      />
      <div class="header__content main-page-header-content">
        <h1 class="header__title main-page-header-title">
          {{ upcomingList[slide]?.title ?? 'нет заголовка' }}
        </h1>
        <p class="header__title main-page-header-descr">
          {{ upcomingList[slide]?.overview ?? 'нет описания' }}
        </p>
      </div>
      <div class="main-page-header-next" @click="nextSlide">
        <img
          :src="
            `https://image.tmdb.org/t/p/original/` +
            upcomingList[slidePoster]?.backdrop_path
          "
          alt="next"
        />
        <div class="main-page-header-next-content">
          <span>Следующий</span>
          <h2>{{ upcomingList[slidePoster]?.title }}</h2>
        </div>
      </div>
    </header>
    <main class="main">
      <MatSwiper isMovies="false" :movies="moviesStore.movies" />
      <MatSwiper />
      <TopMovies />
    </main>
  </div>
</template>

<script setup>
import MatSwiper from "@/components/MatSwiper.vue";
import TopMovies from "@/components/TopMovies.vue";
import { useUpcoming } from "@/store/upcoming.js";
import { useMovies } from "@/store/movies.js";

import {computed, ref } from "vue";

const upcomingStore = useUpcoming();
const moviesStore = useMovies();

const upcomingList = computed(() => {
  return upcomingStore.upcoming?.results;
});

let slide = ref(0);
let slidePoster = ref(slide.value + 1);

const nextSlide = () => {
  slide.value =
    slide.value + 1 === upcomingList.value.length ? 0 : slide.value + 1;
  slidePoster.value =
    slide.value + 1 === upcomingList.value.length ? 0 : slide.value + 1;
};
</script>

<style lang="scss" scoped>
.main-page-header {
  height: 100vh;
  display: flex;
  position: relative;
  & img {
    max-width: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(20, 20, 20, 0.76);
    position: absolute;
    top: 0;
    left: 0;
  }

  &-content {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
  }
  &-title {
    color: rgb(255, 255, 255);
    font-family: "Raleway";
    font-size: 80px;
    font-weight: 700;
    line-height: 94px;
    text-align: center;
  }

  &-descr {
    color: rgb(255, 255, 255);
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    max-width: 960px;
    text-align: center;
  }

  &-next {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100%;
    max-width: 30%;
    height: 100px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
    user-select: none;
    &:active {
      transform: scale(0.95);
    }

    & img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 50%;
      right: 0;
      top: 0;
    }

    &-content {
      width: 100%;
      background: linear-gradient(90deg, #000000 55.64%, rgba(0, 0, 0, 0) 100%);
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 15px;

      & span {
        color: rgb(255, 255, 255);
        font-family: "Raleway";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
      }

      & h2 {
        color: rgb(255, 255, 255);
        font-family: "Raleway";
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
      }
    }
  }
}
</style>