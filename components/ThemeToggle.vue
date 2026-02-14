<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<template>
  <v-btn
    :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    variant="text"
    color="primary"
    size="small"
    @click="toggleTheme"
  />
</template>
