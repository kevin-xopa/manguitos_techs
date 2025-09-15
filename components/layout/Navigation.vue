<template>
  <v-app-bar
    app
    color="surface"
    class="navigation-bar"
    elevation="0"
    :style="{
      background: 'rgba(var(--v-theme-surface), 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 107, 157, 0.1)'
    }"
  >
    <v-container class="navigation-container">
      <div class="nav-brand">
        <!-- Professional Logo -->
        <v-btn
          to="/"
          variant="text"
          class="brand-btn"
          :ripple="false"
        >
          <div class="brand-content">
            <div class="brand-decoration">
              <span class="skull-nav">💀</span>
            </div>
            <span class="brand-text">Kevin Tech</span>
          </div>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav d-none d-md-flex">
        <v-btn
          v-for="link in links"
          :key="link.text"
          :href="link.to"
          variant="text"
          class="nav-link"
          :ripple="false"
        >
          {{ link.text }}
        </v-btn>
      </nav>

      <!-- Mobile Menu -->
      <v-menu
        v-model="menu"
        location="bottom end"
        offset="8"
        class="d-md-none"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            variant="text"
            class="mobile-menu-btn"
            v-bind="props"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-card
          class="mobile-menu-card"
          elevation="8"
          rounded="lg"
        >
          <v-list class="mobile-nav-list">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :href="link.to"
              class="mobile-nav-link"
              @click="menu = false"
            >
              <v-list-item-title class="mobile-link-text">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(false)
const links = ref([
  { text: 'Inicio', to: '#' },
  { text: 'Sobre Mí', to: '#sobre-mi' },
  { text: 'Servicios', to: '#services' },
  { text: 'Proyectos', to: '#proyectos' },
  { text: 'Contacto', to: '#contacto' }
])
</script>

<style scoped>
/* DAY OF THE DEAD NAVIGATION */

.navigation-bar {
  position: fixed !important;
  top: 0;
  z-index: 1000 !important;
  transition: all 0.3s ease;
}

.navigation-container {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Brand Section */
.nav-brand {
  position: relative;
}

.brand-btn {
  color: rgb(var(--v-theme-on-surface)) !important;
  font-weight: 700 !important;
  font-size: 1.25rem !important;
  text-transform: none !important;
  padding: 0.5rem 1rem !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  border-radius: 8px !important;
}

.brand-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-decoration {
  position: relative;
}

.skull-nav {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 6px rgba(255, 107, 157, 0.4));
  animation: pulse-skull 3s ease-in-out infinite;
}

@keyframes pulse-skull {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
}

.brand-btn:hover {
  background: rgba(255, 107, 157, 0.1) !important;
  transform: translateY(-1px);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  color: rgb(var(--v-theme-on-surface-variant)) !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  position: relative;
  transition: all 0.3s ease !important;
  border-radius: 8px !important;
  padding: 0.75rem 1.25rem !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
  background: rgba(255, 107, 157, 0.05) !important;
}

.nav-link:hover::after {
  width: 80%;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  color: rgb(var(--v-theme-on-surface)) !important;
  border: 1px solid rgba(255, 107, 157, 0.2) !important;
  transition: all 0.3s ease !important;
}

.mobile-menu-btn:hover {
  background: rgba(255, 107, 157, 0.1) !important;
  border-color: rgba(255, 107, 157, 0.4) !important;
}

/* Mobile Menu */
.mobile-menu-card {
  background: rgba(var(--v-theme-surface), 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 157, 0.2) !important;
  min-width: 200px;
}

.mobile-nav-list {
  padding: 0.5rem !important;
}

.mobile-nav-link {
  border-radius: 8px !important;
  transition: all 0.3s ease;
  margin-bottom: 0.25rem;
}

.mobile-nav-link:hover {
  background: rgba(255, 107, 157, 0.1) !important;
  transform: translateX(2px);
}

.mobile-link-text {
  font-weight: 500 !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  font-size: 0.875rem !important;
}

.mobile-nav-link:hover .mobile-link-text {
  color: rgb(var(--v-theme-primary)) !important;
}

/* Responsive Design */
@media (max-width: 960px) {
  .navigation-container {
    padding: 0 1rem;
  }
}

@media (max-width: 600px) {
  .brand-text {
    font-size: 1.125rem;
  }

  .skull-nav {
    font-size: 1.25rem;
  }
}
</style>