<template>
  <v-app id="app">
    <Transition>
      <router-view />
    </Transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Default App Title",
    titleTemplate: "%s | vue-meta Example App",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "An example Vue application with vue-meta." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#app {
  margin: 0 !important;
}

.v-application {
  width: 100%;
  font-family: "Poppins", sans-serif !important;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: white !important;
}
</style>
