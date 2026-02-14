<script setup>
import { ref, computed } from "vue";
import { useScrollAnimationList } from "~/composables/useScrollAnimation";

const services = ref([
  {
    title: "Desarrollo Web Full-Stack",
    icon: "mdi-web",
    description: "Aplicaciones web completas con arquitecturas modernas y código limpio.",
    technologies: ["Vue.js", "React", "Node.js", "Python"]
  },
  {
    title: "Landing Pages",
    icon: "mdi-bullseye-arrow",
    description: "Páginas optimizadas para conversión con performance excepcional.",
    technologies: ["Nuxt.js", "Next.js", "SEO"]
  },
  {
    title: "Software a la Medida",
    icon: "mdi-cog-outline",
    description: "Soluciones personalizadas adaptadas a tu negocio.",
    technologies: ["Microservicios", "Cloud Native", "DevOps"]
  },
  {
    title: "Aplicaciones Móviles",
    icon: "mdi-cellphone",
    description: "Apps nativas e híbridas para iOS y Android.",
    technologies: ["React Native", "Flutter", "Firebase"]
  },
  {
    title: "APIs & Integraciones",
    icon: "mdi-link-variant",
    description: "APIs robustas y conexiones entre sistemas empresariales.",
    technologies: ["FastAPI", "GraphQL", "REST"]
  },
  {
    title: "IA y Machine Learning",
    icon: "mdi-robot",
    description: "Inteligencia artificial para automatizar y optimizar procesos.",
    technologies: ["Python", "TensorFlow", "OpenAI"]
  }
]);

const { setItemRef, visibleItems } = useScrollAnimationList(services.value.length);
</script>

<template>
  <section class="services-section" id="services">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-services">
      <div class="skull-pattern skull-service-1">💀</div>
      <div class="skull-pattern skull-service-2">💀</div>
      <div class="flower-pattern flower-service-1">🌺</div>
      <div class="flower-pattern flower-service-2">🌸</div>
      <div class="marigold-pattern marigold-service-1">🧡</div>
    </div>

    <v-container class="position-relative" style="z-index: 10; max-width: 1200px;">
      <div class="text-center mb-16 mx-auto" style="max-width: 800px;">
        <v-chip variant="tonal" color="primary" size="small" label class="mb-4">
          SERVICIOS
        </v-chip>
        <h2 class="section-title">Lo que puedo hacer por ti</h2>
        <p class="text-body-1 text-medium-emphasis">
          Especializado en crear soluciones digitales que realmente funcionan
        </p>
      </div>

      <v-row class="mt-12">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            :ref="(el) => setItemRef(el?.$el || el, index)"
            :data-index="index"
            class="service-card flex-grow-1"
            :class="{ visible: visibleItems[index] }"
            elevation="0"
            rounded="xl"
          >
            <v-card-text class="pa-7">
              <v-avatar
                size="48"
                variant="tonal"
                color="primary"
                rounded="lg"
                class="mb-5"
              >
                <v-icon :icon="service.icon" size="24" />
              </v-avatar>

              <v-card-title class="pa-0 mb-2 text-subtitle-1 font-weight-bold" style="white-space: normal;">
                {{ service.title }}
              </v-card-title>

              <p class="text-body-2 text-medium-emphasis mb-5" style="line-height: 1.6;">
                {{ service.description }}
              </p>

              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="tech in service.technologies"
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
    </v-container>
  </section>
</template>

<style scoped>
.services-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.dotd-bg-services {
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

.skull-service-1 { top: 15%; left: 5%; }
.skull-service-2 { bottom: 25%; right: 8%; animation-delay: 3s; }
.flower-service-1 { top: 40%; right: 12%; animation-delay: 1s; color: rgb(var(--v-theme-primary)); }
.flower-service-2 { bottom: 60%; left: 15%; animation-delay: 4s; color: rgb(var(--v-theme-secondary)); }
.marigold-service-1 { top: 70%; left: 50%; animation-delay: 2s; color: rgb(var(--v-theme-tertiary)); }

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

.service-card {
  background: rgba(var(--v-theme-on-surface), 0.04) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
  backdrop-filter: blur(20px);
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.service-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.3);
  background: rgba(var(--v-theme-on-surface), 0.07) !important;
  box-shadow: 0 16px 40px -12px rgba(var(--v-theme-primary), 0.12);
}

/* Responsive */
@media (max-width: 960px) {
  .services-section { padding: 4rem 0; }
  .section-title { font-size: 2.5rem; }
}

@media (max-width: 600px) {
  .services-section { padding: 3rem 0; }
  .section-title { font-size: 2rem; }
}
</style>
