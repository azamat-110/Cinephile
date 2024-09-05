<template>
  <div class="scroll__progress">
    <div class="scroll__progress-indicator" :style="{width: progress}"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let progress = ref(0);

window.addEventListener("scroll", () => {
  const { documentElement, body } = document;
  console.log(documentElement.scrollHeight - documentElement.clientHeight);

  let windowScroll = body.scrollTop || documentElement.scrollTop;
  let height = documentElement.scrollHeight - documentElement.clientHeight;
  progress.value = (windowScroll / height) * 100 + "%";
});

// const scrollContainer = ref(null);
// const scrollSarted = ()=>{
//     const scrollTop = scrollContainer.value.scrollTop;
// };

// onMounted(() => {
//     scrollContainer.value.addEventListener('scroll', scrollSarted());
// });
</script>

<style lang="scss" scoped>
.scroll__progress {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;
  background: #000;
  z-index: 10;

  &-indicator {
    height: 100%;
    background: rgba(20, 154, 3, 1);
  }
}
</style>