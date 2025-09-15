<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Componente global -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
  </NuxtLayout>
</template>

<style>
/* Global Dark Background */
body, html {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
  min-height: 100vh;
  color: #ffffff !important;
  cursor: auto !important; /* Remove any custom cursor */
}

/* Remove any custom cursor globally */
*, *::before, *::after {
  cursor: auto !important;
}

/* Vuetify app background */
.v-application {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
  color: #ffffff !important;
}

.v-main {
  background: transparent !important;
}

/* Force light text colors globally */
h1, h2, h3, h4, h5, h6, p, span, div, label, .v-label {
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Ensure form inputs have proper contrast */
.v-field__input, .v-field__field, .v-text-field input {
  color: #ffffff !important;
}

/* Override any dark text */
.text-dark, .text-black {
  color: #ffffff !important;
}

/* Specific overrides for components that might use dark text */
.v-list-item-title, .v-btn__content, .method-detail, .method-title,
.service-title, .service-description, .project-title, .project-description,
.tech-tag, .feature-item, .tech-title {
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
