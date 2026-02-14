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

        <!-- Toggle tema -->
        <v-btn
          icon
          variant="text"
          size="small"
          class="nav-link ml-1"
          @click="toggleTheme"
        >
          <v-icon size="18">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
          <v-tooltip activator="parent" location="bottom">
            {{ isDark ? 'Tema claro' : 'Tema oscuro' }}
          </v-tooltip>
        </v-btn>
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
      color="surface-container-low"
      width="280"
    >
      <v-list bg-color="transparent">
        <v-list-item
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          @click="drawer = false"
        >
          <v-list-item-title class="drawer-link">{{ link.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="toggleTheme(); drawer = false">
          <v-list-item-title class="drawer-link">
            <v-icon size="16" class="mr-2">{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
            {{ isDark ? 'Tema claro' : 'Tema oscuro' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(false);
const theme = useTheme();

const isDark = computed(() => theme.global.current.value.dark);
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
};

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
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.1em;
}

.nav-link {
  font-size: 0.8rem !important;
  letter-spacing: 0.02em;
  text-transform: none !important;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

.drawer-link {
  color: rgb(var(--v-theme-on-surface));
}
</style>
