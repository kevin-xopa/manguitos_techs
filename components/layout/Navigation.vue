<template>
  <v-app-bar flat color="background" :elevation="0" height="64">
    <v-container class="d-flex align-center py-0" style="max-width: 1200px;">
      <a href="#" class="d-flex align-center text-decoration-none">
        <span class="nav-logo">💀 Xopa Tech</span>
      </a>

      <v-spacer />

      <!-- Desktop nav -->
      <div class="d-none d-md-flex align-center ga-1">
        <v-btn
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          variant="text"
          size="small"
          class="nav-link"
        >
          {{ link.text }}
        </v-btn>

        <ThemeToggle class="ml-1" />
      </div>

      <!-- Mobile menu -->
      <v-btn
        class="d-md-none"
        icon
        variant="text"
        size="small"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>

    <!-- Mobile drawer -->
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="280"
    >
      <v-list bg-color="transparent">
        <v-list-item
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          @click="drawer = false"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
        <v-divider class="my-2" />
        <v-list-item @click="drawer = false">
          <ThemeToggle />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const links = [
  { text: "Inicio", to: "#" },
  { text: "Sobre Mí", to: "#sobre-mi" },
  { text: "Servicios", to: "#services" },
  { text: "Proyectos", to: "#proyectos" },
  { text: "Contacto", to: "#contacto" },
];
</script>

<style scoped>
.nav-logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.05em;
  font-family: 'Space Grotesk', sans-serif;
}

.nav-link {
  color: rgb(var(--v-theme-on-surface-variant)) !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.02em;
  text-transform: none !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
