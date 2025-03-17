<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css",
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Componente global -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
  </NuxtLayout>
</template>
