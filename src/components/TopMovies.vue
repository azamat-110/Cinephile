<template>
  <section class="top__movies">
    <swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperModules.breakpoints"
      space-between="25"
      class="top__movies-swiper"
    >
      <swiper-slide class="top__movies-swiper-item">
        <h2 class="top__movies-title">
            ТОП
            <span>10</span>
        </h2>
        <img src="@/assets/images/slide.png" alt="slide" />
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
 
</script>

<style lang="scss" scoped>

</style>