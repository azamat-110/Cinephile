<template>
    <nav class="nav">
      <div class="container nav__content">
        <router-link to="/">
          <span class="nav__logo"> cinephile </span>
        </router-link>
        <ul class="nav__list">
          <li>
            <router-link to="/" class="nav__list-link">Главная</router-link>
          </li>
          <li>
            <router-link to="/movies" class="nav__list-link"
              >Фильмы</router-link
            >
          </li>
          <li>
            <router-link to="/serials" class="nav__list-link"
              >Сериалы</router-link
            >
          </li>
          <li>
            <router-link to="/search" class="nav__list-link">
              <img src="@/assets//images//bx_search.svg" alt="search" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script setup>
</script>

<style lang="scss">
</style>