<template>
  <section class="portfolio-section" id="proyectos">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-portfolio">
      <div class="skull-pattern skull-portfolio-1">💀</div>
      <div class="skull-pattern skull-portfolio-2">💀</div>
      <div class="skull-pattern skull-portfolio-3">💀</div>
      <div class="flower-pattern flower-portfolio-1">🌺</div>
      <div class="flower-pattern flower-portfolio-2">🌸</div>
      <div class="flower-pattern flower-portfolio-3">🌹</div>
      <div class="marigold-pattern marigold-portfolio-1">🧡</div>
      <div class="marigold-pattern marigold-portfolio-2">🧡</div>
    </div>

    <v-container class="position-relative" style="z-index: 10; max-width: 1200px;">
      <div class="text-center mb-12">
        <div class="section-tag">Portafolio</div>
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="section-subtitle">
          Algunos de los proyectos en los que he trabajado, desde aplicaciones web hasta soluciones móviles
        </p>
      </div>

      <v-row class="mt-8">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            class="project-card flex-grow-1"
            :class="{ visible: isVisible[index] }"
            v-intersect="{
              handler: (e) => onIntersect(e.isIntersecting, index),
              options: { threshold: 0.3 },
            }"
            elevation="0"
          >
            <div class="project-decoration">
              <div class="skull-decoration-project">💀</div>
            </div>

            <div class="project-image">
              <div class="image-placeholder" :style="{ background: project.gradient }">
                <span class="project-icon">{{ project.icon }}</span>
              </div>
              <div class="project-type">{{ project.type }}</div>
            </div>

            <v-card-text class="pa-6 d-flex flex-column flex-grow-1">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div class="d-flex flex-wrap ga-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="project-features mb-4">
                <div class="feature-item d-flex align-center mb-2" v-for="feature in project.features" :key="feature">
                  <span class="feature-check mr-2">✓</span>
                  {{ feature }}
                </div>
              </div>

              <div class="d-flex ga-2">
                <v-btn
                  class="project-btn primary"
                  variant="flat"
                  color="primary"
                  size="small"
                >
                  Ver Demo
                  <v-icon end size="16">mdi-open-in-new</v-icon>
                </v-btn>
                <v-btn
                  class="project-btn secondary"
                  variant="outlined"
                  size="small"
                >
                  Código
                  <v-icon end size="16">mdi-github</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="more-projects text-center mt-12 pa-8">
        <p class="more-text">¿Quieres ver más proyectos?</p>
        <v-btn
          class="more-btn"
          variant="outlined"
          color="primary"
          size="large"
          href="#contacto"
        >
          Hablemos de tu proyecto
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          title: "E-commerce Platform",
          type: "Web Application",
          icon: "🛒",
          gradient: "linear-gradient(135deg, #ff6b9d 0%, #ff8e53 100%)",
          description: "Plataforma completa de comercio electrónico con panel de administración, gestión de inventario y pasarela de pagos.",
          technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
          features: ["Carrito de compras", "Panel admin", "Pagos seguros", "Inventario"]
        },
        {
          title: "Task Management App",
          type: "Mobile App",
          icon: "📋",
          gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          description: "Aplicación móvil para gestión de tareas y proyectos con sincronización en tiempo real y colaboración en equipo.",
          technologies: ["React Native", "Firebase", "Redux", "Expo"],
          features: ["Sync en tiempo real", "Colaboración", "Notificaciones", "Offline mode"]
        },
        {
          title: "Analytics Dashboard",
          type: "Web Dashboard",
          icon: "📊",
          gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          description: "Dashboard interactivo para análisis de datos con gráficos dinámicos y reportes automatizados.",
          technologies: ["React", "D3.js", "Python", "FastAPI"],
          features: ["Gráficos interactivos", "Reportes PDF", "Filtros avanzados", "API REST"]
        },
        {
          title: "Booking System",
          type: "Web Platform",
          icon: "📅",
          gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
          description: "Sistema de reservas online con calendario integrado, notificaciones automáticas y gestión de usuarios.",
          technologies: ["Nuxt.js", "Express", "MongoDB", "Socket.io"],
          features: ["Calendario integrado", "Notificaciones", "Multi-usuario", "Tiempo real"]
        },
        {
          title: "Inventory Management",
          type: "Enterprise App",
          icon: "📦",
          gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
          description: "Sistema empresarial de gestión de inventario con códigos QR, alertas de stock y reportes detallados.",
          technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
          features: ["Códigos QR", "Alertas de stock", "Reportes", "Multi-almacén"]
        },
        {
          title: "Social Media Tool",
          type: "SaaS Platform",
          icon: "📱",
          gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          description: "Herramienta para programar y analizar contenido en redes sociales con métricas avanzadas.",
          technologies: ["Next.js", "Prisma", "PostgreSQL", "API Social"],
          features: ["Programación", "Analytics", "Multi-cuenta", "Métricas"]
        }
      ],
      isVisible: []
    }
  },
  mounted() {
    this.isVisible = new Array(this.projects.length).fill(false);
  },
  methods: {
    onIntersect(isIntersecting, index) {
      if (isIntersecting) {
        this.isVisible[index] = true;
      }
    }
  }
}
</script>

<style scoped>
/* DAY OF THE DEAD PORTFOLIO SECTION */
.portfolio-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

/* Day of the Dead Background Patterns */
.dotd-bg-portfolio {
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

.skull-portfolio-1 { top: 10%; left: 5%; animation-delay: 0s; }
.skull-portfolio-2 { top: 60%; right: 8%; animation-delay: 3s; }
.skull-portfolio-3 { bottom: 20%; left: 15%; animation-delay: 5s; }
.flower-portfolio-1 { top: 30%; right: 12%; animation-delay: 1s; color: #ff6b9d; }
.flower-portfolio-2 { bottom: 40%; left: 25%; animation-delay: 4s; color: #ff8e53; }
.flower-portfolio-3 { top: 80%; right: 30%; animation-delay: 2s; color: #c44569; }
.marigold-portfolio-1 { top: 45%; left: 60%; animation-delay: 1.5s; color: #f39c12; }
.marigold-portfolio-2 { bottom: 60%; right: 50%; animation-delay: 3.5s; color: #e67e22; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}


/* Section Header */

/* Project Cards */
.project-card {
  background: rgba(255, 255, 255, 0.15) !important;
  border: 1px solid rgba(255, 107, 157, 0.4) !important;
  border-radius: 16px !important;
  transform: translateY(30px);
  transition: all 0.6s ease !important;
  backdrop-filter: blur(20px);
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
}

.project-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(255, 107, 157, 0.2);
}

/* Project Decoration */
.project-decoration {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 5;
}

.skull-decoration-project {
  font-size: 1.25rem;
  opacity: 0.4;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.6; }
}

.project-image {
  height: 180px;
  position: relative;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.project-card:hover .image-placeholder {
  transform: scale(1.05);
}

.project-icon {
  font-size: 2.5rem;
  transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.1);
}

.project-type {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  border: 1px solid rgba(255, 107, 157, 0.2);
}

.project-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}


.tech-badge {
  background: rgba(255, 107, 157, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background: rgba(255, 107, 157, 0.2);
}

.project-features {
  flex-grow: 1;
}

.feature-item {
  font-size: 0.875rem;
}

.feature-check {
  color: #ff6b9d;
}


.project-btn {
  transition: all 0.3s ease;
  flex: 1;
}

.project-btn:hover {
  transform: translateY(-2px);
}

.more-projects {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 107, 157, 0.2);
}

/* Responsive */
@media (max-width: 960px) {
  .portfolio-section {
    padding: 4rem 0;
  }

  .portfolio-container {
    padding: 0 1rem;
  }

  .project-content {
    padding: 1rem;
  }

  .project-actions {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .portfolio-section {
    padding: 3rem 0;
  }

  .project-image {
    height: 150px;
  }

  .project-icon {
    font-size: 2rem;
  }
}
</style>