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
    </header>
  </div>
</template>

<script setup>
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
}
</style>