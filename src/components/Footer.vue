<template>
  <footer class="footer">
    <div class="container footer__content">
      <ul class="footer__socials">
        <li v-for="(item, i) in socialsList" :key="i">
          <a href="" class="footer__socials-link">
            <img :src="setImage(item)" alt="socials" />
          </a>
        </li>
      </ul>
      <p class="footer__content-descr">
        © 2022 CINEPHILE. Может содержать информацию, не предназначенную для
        несовершеннолетних
      </p>
      <p class="footer__content-descr">
        Данные получены с сайта <a href="themoviedb.org">themoviedb.org</a>
      </p>
      <a href="https://proweb.uz">
        <img :src="setImage('footerLogo.svg')" alt="footerLogo.svg">
      </a>
    </div>
  </footer>
</template>

<script setup>
// import {URL} from "node:url";

const socialsList = [
  "tg.svg",
  "vk.svg",
  "f.svg",
  "inst.svg",
  "tiktok.svg",
  "yt.svg",
  "tw.svg",
  "lnk.svg",
];

const setImage = (path) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
</style>