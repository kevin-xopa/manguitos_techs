<template>
  <v-app-bar app color="primary" elevate-on-scroll>
    <v-container class="d-flex align-center">
      <!-- Logo y Nombre -->
      <v-btn to="/" variant="text" class="text-h5 font-weight-bold">
        🍊 Mangitos Techs
      </v-btn>

      <v-spacer></v-spacer>

      <!-- Menú para escritorio -->
      <v-btn v-for="link in links" :key="link.text" :to="link.to" variant="text" class="mx-2">
        {{ link.text }}
      </v-btn>

      <!-- Menú hamburguesa en móvil -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    </v-container>

    <!-- Drawer para móviles -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.to" @click="drawer = false">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const links = ref([
  { text: 'Inicio', to: '/' },
  { text: 'Servicios', to: '#servicios' },
  { text: 'Portfolio', to: '#portfolio' },
  { text: 'Contacto', to: '#contacto' }
])
</script>
