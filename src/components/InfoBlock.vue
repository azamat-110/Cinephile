<template>
  <div class="info__block" :class="{ active: showItem }">
    <img src="@/assets/images/bg.png" alt="bg " />
    <div class="info__block-content"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  showItem: Boolean,
});
</script>

<style lang="scss" scoped>
.info__block {
  height: 0;
  transform: scale(0);
  background: #000;
  position: relative;
  transition: .8s;

  &.active {
    height: 700px;
    transform: scale(1);
  }

  & img {
    right: 0;
    top: 0;
    position: absolute;
  }
  &-content {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      90deg,
      #000000 35%,
      rgba(0, 0, 0, 0.2) 72.82%,
      rgba(0, 0, 0, 0) 87.73%
    );
    z-index: 10;
  }
}
</style>