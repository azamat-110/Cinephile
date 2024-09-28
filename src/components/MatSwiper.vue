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
      <swiper-slide
        class="mat__section-swiper-item"
        @click="getItem(movie, index)"
        v-for="(movie, index) in movies?.results"
        :key="movie.id"
        :class="{ active: activeItem == index }"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original/` + movie.poster_path"
          alt="slide"
        />
        <span></span>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ref, defineEmits, defineProps } from "vue";

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
  movies: Object,
  serials: Object,
});

const emit = defineEmits([
  'showSlideInfo',
]);

let activeItem = ref(-1); 
const getItem = (movie, index) => {
  activeItem.value = index;
  emit("showSlideInfo", movie);
};
</script>

<style lang="scss" scoped>
.mat__section {
  padding-top: 20px;
  padding-bottom: 50px;
  overflow: hidden;

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
      display: flex;
      height: 468px;
      border: 1px solid transparent;
      transition: 0.5s;
      cursor: pointer;

      &.active {
        border: 1px solid #fff;
        & span {
          height: 25px;
        }
      }

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
        border-radius: 10px;
      }

      & span {
        width: 25px;
        height: 0px;
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        clip-path: polygon(50% 100%, 0 0, 100% 0);
        background: #fff;
      }
    }
  }
}
</style>