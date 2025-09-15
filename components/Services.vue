<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Desarrollo Web Full-Stack",
    icon: "🌐",
    color: "#2563eb",
    description:
      "Aplicaciones web completas con tecnologías modernas como Vue, React, Node.js y Python.",
    technologies: ["Vue.js", "React", "Node.js", "Python", "PostgreSQL"],
    features: [
      "Responsive Design",
      "API REST",
      "Autenticación",
      "Base de datos",
    ],
  },
  {
    title: "Landing Pages",
    icon: "🎯",
    color: "#ec4899",
    description: "Páginas de aterrizaje optimizadas para conversión con diseño moderno y performance excepcional.",
    technologies: ["Nuxt.js", "Next.js", "Tailwind", "SEO", "Analytics"],
    features: ["Alta conversión", "SEO optimizado", "Carga rápida", "A/B Testing"]
  },
  {
    title: "Software a la Medida",
    icon: "⚙️",
    color: "#7c3aed",
    description: "Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.",
    technologies: ["Custom Stack", "Microservicios", "Cloud Native", "DevOps"],
    features: ["Análisis de requisitos", "Arquitectura personalizada", "Escalabilidad", "Mantenimiento"]
  },
  {
    title: "Aplicaciones Móviles",
    icon: "📱",
    color: "#10b981",
    description:
      "Apps nativas e híbridas para iOS y Android con experiencia de usuario optimizada.",
    technologies: ["React Native", "Flutter", "Expo", "Firebase"],
    features: [
      "Cross-platform",
      "Offline Support",
      "Push Notifications",
      "App Store Deploy",
    ],
  },
  {
    title: "Aplicaciones a Gran Escala",
    icon: "🏗️",
    color: "#0891b2",
    description: "Sistemas empresariales robustos capaces de manejar millones de usuarios y transacciones.",
    technologies: ["Kubernetes", "Docker", "Redis", "Microservicios", "Load Balancing"],
    features: ["Alta disponibilidad", "Auto-scaling", "Monitoreo", "Failover automático"]
  },
  {
    title: "Optimización y Rendimiento",
    icon: "⚡",
    color: "#ea580c",
    description: "Mejora del rendimiento de aplicaciones existentes para máxima velocidad y eficiencia.",
    technologies: ["Performance Audit", "CDN", "Caching", "Database Optimization"],
    features: ["Análisis de bottlenecks", "Optimización de queries", "Compresión", "Métricas en tiempo real"]
  },
  {
    title: "APIs & Integraciones",
    icon: "🔗",
    color: "#8b5cf6",
    description:
      "Desarrollo de APIs robustas y conexiones entre sistemas empresariales.",
    technologies: ["FastAPI", "Express.js", "GraphQL", "REST"],
    features: [
      "Documentación",
      "Versionado",
      "Rate Limiting",
      "Microservicios",
    ],
  },
  {
    title: "Aplicaciones IoT",
    icon: "🌐",
    color: "#059669",
    description: "Desarrollo de sistemas IoT para conectar y gestionar dispositivos inteligentes.",
    technologies: ["MQTT", "InfluxDB", "Node-RED", "Raspberry Pi", "Arduino"],
    features: ["Tiempo real", "Edge Computing", "Dashboards", "Alertas automáticas"]
  },
  {
    title: "IA y Machine Learning",
    icon: "🤖",
    color: "#dc2626",
    description: "Soluciones de inteligencia artificial y aprendizaje automático para automatizar procesos.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn"],
    features: ["Modelos predictivos", "Procesamiento de lenguaje", "Visión artificial", "Automatización"]
  },
  {
    title: "Consultoría Tecnológica",
    icon: "💡",
    color: "#f59e0b",
    description:
      "Asesoría en arquitectura, stack tecnológico y mejores prácticas de desarrollo.",
    technologies: ["Arquitectura", "DevOps", "Cloud", "CI/CD"],
    features: [
      "Auditoría de código",
      "Migración",
      "Optimización",
      "Escalabilidad",
    ],
  },
]);
// Manejo de visibilidad para animación de entrada
const isVisible = ref(new Array(services.value.length).fill(false));

// Función de intersección con Vuetify
const onIntersect = (isIntersecting, index) => {
  if (isIntersecting) {
    isVisible.value[index] = true;
  }
};
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

    <v-container
      class="position-relative"
      style="z-index: 10; max-width: 1200px"
    >
      <div class="text-center mb-16 mx-auto" style="max-width: 800px">
        <div class="section-tag">Servicios</div>
        <h2 class="section-title">Lo que puedo hacer por ti</h2>
        <p class="section-subtitle">
          Especializado en crear soluciones digitales que realmente funcionan
        </p>
      </div>

      <v-row class="mt-12">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="d-flex"
        >
          <div
            class="service-card flex-grow-1 pa-10"
            :class="{ visible: isVisible[index] }"
            v-intersect="{
              handler: (e) => onIntersect(e.isIntersecting, index),
              options: { threshold: 0.3 },
            }"
          >
            <div class="service-decoration">
              <div class="skull-decoration-small">💀</div>
            </div>

            <div class="service-icon mb-6">
              {{ service.icon }}
            </div>

            <h3 class="service-title mb-4">{{ service.title }}</h3>
            <p class="service-description mb-8">{{ service.description }}</p>

            <div class="mb-8">
              <h4 class="tech-title mb-4">Stack</h4>
              <div class="d-flex flex-wrap ga-2">
                <span
                  v-for="tech in service.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="features-section mb-8">
              <ul class="pa-0 ma-0" style="list-style: none">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="feature-item d-flex align-center mb-3"
                >
                  <span class="feature-check mr-3">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <v-btn class="service-cta" variant="outlined" size="large" block>
              Más detalles
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
/* DAY OF THE DEAD SERVICES SECTION */

.services-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

/* Day of the Dead Background Patterns */
.dotd-bg-services {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.08;
}

.skull-pattern,
.flower-pattern,
.marigold-pattern {
  position: absolute;
  font-size: 1.5rem;
  animation: float 8s ease-in-out infinite;
}

.skull-service-1 {
  top: 15%;
  left: 5%;
  animation-delay: 0s;
}
.skull-service-2 {
  bottom: 25%;
  right: 8%;
  animation-delay: 3s;
}
.flower-service-1 {
  top: 40%;
  right: 12%;
  animation-delay: 1s;
  color: #ff6b9d;
}
.flower-service-2 {
  bottom: 60%;
  left: 15%;
  animation-delay: 4s;
  color: #ff8e53;
}
.marigold-service-1 {
  top: 70%;
  left: 50%;
  animation-delay: 2s;
  color: #f39c12;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}

/* Section Header - Zone Style */

.section-tag {
  display: inline-block;
  background: rgba(255, 107, 157, 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  border: 1px solid rgba(255, 107, 157, 0.2);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.section-subtitle {
  font-size: 1.25rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Services Grid - Zone Layout with Vuetify */

.service-card {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 107, 157, 0.4);
  border-radius: 16px;
  position: relative;
  backdrop-filter: blur(20px);
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
}

.service-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 107, 157, 0.3);
  box-shadow: 0 25px 50px -12px rgba(255, 107, 157, 0.15);
}

/* Service Decoration */
.service-decoration {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.skull-decoration-small {
  font-size: 1.5rem;
  opacity: 0.3;
  filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.3));
  animation: pulse-decoration 4s ease-in-out infinite;
}

@keyframes pulse-decoration {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

/* Service Content */
.service-icon {
  font-size: 3rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(255, 107, 157, 0.2));
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.service-description {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Technologies Section */

.tech-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.tech-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  background: rgba(255, 107, 157, 0.1);
  color: rgb(var(--v-theme-primary));
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 16px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: rgba(255, 107, 157, 0.2);
  transform: translateY(-1px);
}

/* Features Section */
.features-section {
  flex-grow: 1;
}

.feature-item {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.feature-check {
  color: #ff6b9d;
  font-weight: 600;
  font-size: 1rem;
}

/* Service CTA */
.service-cta {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.service-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 107, 157, 0.1),
    transparent
  );
  transition: left 0.5s;
}

.service-cta:hover::before {
  left: 100%;
}

.service-cta:hover {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
}

/* Responsive Design */
@media (max-width: 960px) {
  .services-section {
    padding: 4rem 0;
  }

  .services-container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 2rem;
  }
}

@media (max-width: 600px) {
  .services-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .skull-decoration-small {
    font-size: 1.25rem;
  }
}
</style>
