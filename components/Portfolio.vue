<script setup>
import { ref } from "vue";
import { useScrollAnimationList } from "~/composables/useScrollAnimation";

const projects = ref([
  {
    title: "HTTP Cobalto 60",
    type: "Guía Interactiva",
    icon: "mdi-radioactive",
    description: "Guía educativa de códigos HTTP explicados con sucesos reales de México. PWA con 40+ códigos y ejemplos en 5 lenguajes.",
    technologies: ["Nuxt 4", "Vuetify 3", "Shiki", "PWA"],
    gradientClass: "gradient-primary-tertiary",
    url: "https://kevin-xopa.github.io/httpcobalto60/"
  },
  {
    title: "Jixo",
    type: "ERP / SaaS",
    icon: "mdi-puzzle",
    description: "Sistema integral de gestión para distribuidores: ventas omnicanal, inventario multi-almacén, facturación CFDI 4.0 y análisis de costos en tiempo real.",
    technologies: ["Nuxt 3", "Vuetify 3", "FastAPI", "PostgreSQL"],
    gradientClass: "gradient-secondary-primary",
    url: "https://kevin-xopa.github.io/jixo-site/"
  },
  {
    title: "Xoco",
    type: "Juego Educativo",
    icon: "mdi-shape",
    description: "Tangram digital educativo para niños de 3 a 12 años. Gratuito, sin anuncios, con modo historia, retos y modo libre. PWA offline-first.",
    technologies: ["Nuxt 3", "TailwindCSS", "SVG", "GSAP"],
    gradientClass: "gradient-tertiary-primary"
  },
  // {
  //   title: "E-commerce Platform",
  //   type: "Web App",
  //   icon: "mdi-cart",
  //   description: "Plataforma de comercio electrónico con panel admin, inventario y pasarela de pagos.",
  //   technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
  //   gradientClass: "gradient-primary-secondary"
  // },
  // {
  //   title: "Task Management",
  //   type: "Mobile App",
  //   icon: "mdi-clipboard-check-outline",
  //   description: "Gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
  //   technologies: ["React Native", "Firebase", "Redux"],
  //   gradientClass: "gradient-secondary-primary"
  // },
  // {
  //   title: "Analytics Dashboard",
  //   type: "Dashboard",
  //   icon: "mdi-chart-bar",
  //   description: "Dashboard interactivo con gráficos dinámicos y reportes automatizados.",
  //   technologies: ["React", "D3.js", "Python", "FastAPI"],
  //   gradientClass: "gradient-tertiary-secondary"
  // },
  // {
  //   title: "Booking System",
  //   type: "Plataforma",
  //   icon: "mdi-calendar-clock",
  //   description: "Sistema de reservas online con calendario, notificaciones y gestión multi-usuario.",
  //   technologies: ["Nuxt.js", "Express", "MongoDB"],
  //   gradientClass: "gradient-primary-secondary"
  // },
  // {
  //   title: "Inventory Management",
  //   type: "Enterprise",
  //   icon: "mdi-package-variant-closed",
  //   description: "Gestión de inventario con códigos QR, alertas de stock y reportes detallados.",
  //   technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
  //   gradientClass: "gradient-tertiary-primary"
  // }
]);

const { setItemRef, visibleItems } = useScrollAnimationList(projects.value.length);
</script>

<template>
  <section class="portfolio-section" id="proyectos">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-portfolio">
      <div class="skull-pattern skull-portfolio-1">💀</div>
      <div class="skull-pattern skull-portfolio-2">💀</div>
      <div class="flower-pattern flower-portfolio-1">🌺</div>
      <div class="flower-pattern flower-portfolio-2">🌸</div>
      <div class="marigold-pattern marigold-portfolio-1">🧡</div>
    </div>

    <v-container class="position-relative" style="z-index: 10; max-width: 1200px;">
      <div class="text-center mb-16 mx-auto" style="max-width: 800px;">
        <v-chip variant="tonal" color="primary" size="small" label class="mb-4">
          PORTAFOLIO
        </v-chip>
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="text-body-1 text-medium-emphasis">
          Algunos de los proyectos en los que he trabajado
        </p>
      </div>

      <v-row class="mt-12">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            :ref="(el) => setItemRef(el?.$el || el, index)"
            :data-index="index"
            class="project-card flex-grow-1"
            :class="{ visible: visibleItems[index] }"
            :href="project.url"
            :target="project.url ? '_blank' : undefined"
            elevation="0"
            rounded="xl"
          >
            <!-- Gradient Header -->
            <div class="project-header" :class="project.gradientClass">
              <v-icon :icon="project.icon" size="40" color="white" />
              <v-chip
                size="x-small"
                label
                variant="flat"
                class="project-type-chip"
              >
                {{ project.type }}
              </v-chip>
            </div>

            <v-card-text class="pa-6">
              <v-card-title class="pa-0 mb-2 text-subtitle-1 font-weight-bold" style="white-space: normal;">
                {{ project.title }}
              </v-card-title>

              <p class="text-body-2 text-medium-emphasis mb-5" style="line-height: 1.6;">
                {{ project.description }}
              </p>

              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                  label
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-center mt-14">
        <v-btn
          variant="outlined"
          color="primary"
          size="large"
          href="#contacto"
          rounded="lg"
          class="text-none font-weight-bold"
          append-icon="mdi-arrow-right"
        >
          Hablemos de tu proyecto
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.portfolio-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.dotd-bg-portfolio {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.08;
}

.skull-pattern, .flower-pattern, .marigold-pattern {
  position: absolute;
  font-size: 1.5rem;
  animation: float 8s ease-in-out infinite;
}

.skull-portfolio-1 { top: 10%; left: 5%; }
.skull-portfolio-2 { top: 60%; right: 8%; animation-delay: 3s; }
.flower-portfolio-1 { top: 30%; right: 12%; animation-delay: 1s; color: rgb(var(--v-theme-primary)); }
.flower-portfolio-2 { bottom: 40%; left: 25%; animation-delay: 4s; color: rgb(var(--v-theme-secondary)); }
.marigold-portfolio-1 { top: 70%; left: 50%; animation-delay: 2s; color: rgb(var(--v-theme-tertiary)); }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

/* Project Cards */
.project-card {
  background: rgba(var(--v-theme-on-surface), 0.04) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  backdrop-filter: blur(20px);
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.project-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.3);
  background: rgba(var(--v-theme-on-surface), 0.07) !important;
  box-shadow: 0 16px 40px -12px rgba(var(--v-theme-primary), 0.12);
}

/* Project Header */
.project-header {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-type-chip {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

.gradient-primary-secondary {
  background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.8), rgba(var(--v-theme-secondary), 0.8));
}
.gradient-secondary-primary {
  background: linear-gradient(135deg, rgba(var(--v-theme-secondary), 0.8), rgba(var(--v-theme-primary), 0.8));
}
.gradient-tertiary-secondary {
  background: linear-gradient(135deg, rgba(var(--v-theme-tertiary), 0.8), rgba(var(--v-theme-secondary), 0.8));
}
.gradient-primary-tertiary {
  background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.8), rgba(var(--v-theme-tertiary), 0.8));
}
.gradient-tertiary-primary {
  background: linear-gradient(135deg, rgba(var(--v-theme-tertiary), 0.8), rgba(var(--v-theme-primary), 0.8));
}

/* Responsive */
@media (max-width: 960px) {
  .portfolio-section { padding: 4rem 0; }
  .section-title { font-size: 2.5rem; }
}

@media (max-width: 600px) {
  .portfolio-section { padding: 3rem 0; }
  .section-title { font-size: 2rem; }
  .project-header { height: 120px; }
}
</style>
