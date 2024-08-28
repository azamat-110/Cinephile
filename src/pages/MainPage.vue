<template>
  <div>
    <header class="header main-page-header">
      <img src="../assets/images/bloc-bg.png" alt="header_bg" />
      <div class="header__content main-page-header-content">
        <h1 class="header__title main-page-header-title">
          Мир юрского периода
        </h1>
        <p class="header__title main-page-header-descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eveniet tenetur enim veritatis placeat officiis consequuntur
          blanditiis laborum quis laboriosam autem obcaecati iusto animi, natus
          aperiam corrupti deserunt dicta aspernatur?
        </p>
      </div>
      <div class="main-page-header-next">
        <img src="@/assets/images/next.png" alt="next" />
        <div class="main-page-header-next-content">
          <span>Следующий</span>
          <h2>Тор: Любовь и гром</h2>
        </div>
      </div>
    </header>

    <main class="main">
      <MatSwiper />
      <MatSwiper isMovies="false" />
      <TopMovies/>
    </main>
  </div>
</template>

<script setup>
import MatSwiper from "@/components/MatSwiper.vue";
import TopMovies from "@/components/TopMovies.vue";
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