<template>
  <div class="loader">
    <div class="loader__item"></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid black;
    border-top: 4px solid rgba(20, 154, 3, 1);
    border-bottom: 4px solid rgba(20, 154, 3, 1);
    animation: loader 1s infinite linear;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>