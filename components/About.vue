<script setup>
const skillCategories = [
  {
    icon: "mdi-palette",
    title: "Frontend",
    skills: ["Vue.js", "React", "TypeScript", "Nuxt"],
  },
  {
    icon: "mdi-cog",
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    icon: "mdi-cellphone",
    title: "Mobile & Tools",
    skills: ["React Native", "Flutter", "Git", "Docker"],
  },
];
</script>

<template>
  <section class="about-section" id="sobre-mi">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-about">
      <div class="skull-pattern skull-about-1">💀</div>
      <div class="skull-pattern skull-about-2">💀</div>
      <div class="flower-pattern flower-about-1">🌺</div>
      <div class="flower-pattern flower-about-2">🌹</div>
      <div class="marigold-pattern marigold-about-1">🧡</div>
    </div>

    <v-container class="about-container">
      <div class="about-content">
        <!-- Profile Card -->
        <div class="about-image-section">
          <div class="profile-decoration">
            <div class="skull-decoration">💀</div>
            <div class="flower-decoration">🌹</div>
          </div>

          <v-card class="profile-card" rounded="xl" elevation="0" max-width="320">
            <div class="text-center pa-6">
              <v-avatar size="150" class="profile-avatar mb-4">
                <v-img
                  src="/assets/images/profile.jpeg"
                  alt="Kevin Ochoa - Full-Stack Developer"
                  cover
                />
              </v-avatar>

              <v-card-title class="text-h5 font-weight-bold justify-center pa-0">
                Kevin
              </v-card-title>
              <v-card-subtitle class="text-body-2 font-weight-medium pa-0 mb-4">
                Full-Stack Developer
              </v-card-subtitle>

              <div class="d-flex justify-space-between ga-2">
                <div v-for="stat in [
                  { number: '5+', label: 'Años' },
                  { number: '50+', label: 'Proyectos' },
                  { number: '100%', label: 'Chamba' },
                ]" :key="stat.label" class="text-center" style="flex: 1;">
                  <div class="text-subtitle-1 font-weight-bold text-primary">{{ stat.number }}</div>
                  <div class="text-caption text-medium-emphasis text-uppercase" style="letter-spacing: 0.05em;">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </v-card>
        </div>

        <!-- Text Section -->
        <div class="about-text-section">
          <v-chip variant="tonal" color="primary" size="small" label class="mb-4">
            SOBRE MÍ
          </v-chip>

          <h2 class="about-title mb-4">
            Construyendo el futuro
            <span class="highlight-text">una línea de código a la vez</span>
          </h2>

          <div class="mb-8">
            <p class="mb-4">
              Desarrollador full-stack con más de 5 años entregando soluciones digitales robustas.
              Para mí el código es chamba, no hobby - cada proyecto debe quedar perfecto o no sale.
            </p>
            <p>
              Si no está listo, no soy yo. Si está mal, lo soluciono. Si se puede mejorar, lo hago.
              Mi trabajo habla por sí solo: código limpio, arquitecturas sólidas, resultados garantizados.
            </p>
          </div>

          <!-- Skills Grid -->
          <h4 class="text-h6 font-weight-bold mb-6">
            Mi Arsenal Tecnológico
          </h4>

          <v-row dense>
            <v-col v-for="category in skillCategories" :key="category.title" cols="12">
              <v-sheet class="skill-category pa-4" rounded="lg" border>
                <div class="d-flex align-center ga-3 mb-3">
                  <v-icon :icon="category.icon" color="primary" size="24" />
                  <span class="text-subtitle-1 font-weight-bold">
                    {{ category.title }}
                  </span>
                </div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="skill in category.skills"
                    :key="skill"
                    variant="tonal"
                    color="primary"
                    size="small"
                    label
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            size="large"
            href="#contacto"
            rounded="lg"
            class="text-none font-weight-bold mt-8"
            append-icon="mdi-arrow-right"
          >
            Trabajemos juntos
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.dotd-bg-about {
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

.skull-about-1 { top: 20%; left: 8%; }
.skull-about-2 { bottom: 30%; right: 12%; animation-delay: 3s; }
.flower-about-1 { top: 50%; right: 5%; animation-delay: 1s; color: rgb(var(--v-theme-primary)); }
.flower-about-2 { bottom: 50%; left: 10%; animation-delay: 4s; color: rgb(var(--v-theme-secondary)); }
.marigold-about-1 { top: 75%; left: 25%; animation-delay: 1.5s; color: rgb(var(--v-theme-tertiary)); }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}

.about-container {
  max-width: 1200px;
  position: relative;
  z-index: 10;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.about-image-section {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 5;
}

.skull-decoration {
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0 0 8px rgba(var(--v-theme-primary), 0.3));
  animation: pulse-decoration 4s ease-in-out infinite;
}

.flower-decoration {
  font-size: 1.5rem;
  position: absolute;
  top: 30px;
  right: 15px;
  color: rgb(var(--v-theme-secondary));
  animation: pulse-decoration 4s ease-in-out infinite reverse;
}

@keyframes pulse-decoration {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.profile-card {
  background: rgba(var(--v-theme-on-surface), 0.05) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)), rgb(var(--v-theme-tertiary)));
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(var(--v-theme-primary), 0.15);
}

.profile-avatar {
  border: 3px solid rgba(var(--v-theme-primary), 0.3);
  box-shadow: 0 15px 30px rgba(var(--v-theme-primary), 0.3);
}

.about-text-section { max-width: 600px; }

.about-title {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.2;
}

.highlight-text {
  color: rgb(var(--v-theme-primary));
  position: relative;
}

.highlight-text::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)), rgb(var(--v-theme-tertiary)));
  border-radius: 2px;
}

.about-description {
  font-size: 1.125rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.7;
}

.skill-category {
  background: rgba(var(--v-theme-on-surface), 0.03) !important;
  border-color: rgba(var(--v-theme-primary), 0.1) !important;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
  box-shadow: 0 8px 20px rgba(var(--v-theme-primary), 0.1);
}

/* Responsive */
@media (max-width: 960px) {
  .about-section { padding: 4rem 0; }
  .about-content { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .about-text-section { order: 2; }
  .about-image-section { order: 1; }
  .about-title { font-size: 2.25rem; }
}

@media (max-width: 600px) {
  .about-section { padding: 3rem 0; }
  .about-title { font-size: 1.875rem; }
}
</style>
