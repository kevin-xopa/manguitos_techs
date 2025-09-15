<template>
  <v-app-bar app color="surface" elevation="2" border>
    <v-container fluid class="d-flex align-center justify-space-between px-4">
      <!-- Logo - lado izquierdo -->
      <v-btn
        to="/"
        variant="text"
        color="primary"
        size="large"
        class="text-h6 font-weight-bold"
      >
        💀 Xopa Tech
      </v-btn>

      <!-- Desktop Navigation - lado derecho -->
      <div class="d-none d-lg-flex align-center ga-2">
        <v-btn
          v-for="link in links"
          :key="link.text"
          :href="link.to"
          variant="tonal"
          color="primary"
          class="text-capitalize"
        >
          {{ link.text }}
        </v-btn>
      </div>

      <!-- Mobile Menu - solo en md o menor -->
      <v-menu v-model="menu" location="bottom end" class="d-lg-none">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-menu"
            variant="text"
            v-bind="props"
            class="d-lg-none"
          />
        </template>

        <v-card elevation="8" rounded="lg" min-width="200">
          <v-list density="compact">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :href="link.to"
              @click="menu = false"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const menu = ref(false);
const links = ref([
  { text: "Inicio", to: "#" },
  { text: "Sobre Mí", to: "#sobre-mi" },
  { text: "Servicios", to: "#services" },
  { text: "Proyectos", to: "#proyectos" },
  { text: "Contacto", to: "#contacto" },
]);
</script>

