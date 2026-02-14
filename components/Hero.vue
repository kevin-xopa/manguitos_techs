<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentMessage = ref("");
const messages = [
  "Creando soluciones digitales innovadoras",
  "Transformando ideas en código funcional",
  "Desarrollando con pasión y precisión",
  "Construyendo el futuro digital",
];

let intervalId = null;

onMounted(() => {
  let messageIndex = 0;
  currentMessage.value = messages[0];
  intervalId = setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    currentMessage.value = messages[messageIndex];
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg">
      <div class="skull-pattern skull-1">💀</div>
      <div class="skull-pattern skull-2">💀</div>
      <div class="skull-pattern skull-3">💀</div>
      <div class="flower-pattern flower-1">🌸</div>
      <div class="flower-pattern flower-2">🌺</div>
      <div class="flower-pattern flower-3">🌹</div>
      <div class="marigold-pattern marigold-1">🧡</div>
      <div class="marigold-pattern marigold-2">🧡</div>
    </div>

    <v-row class="hero-content-wrapper" align="center">
      <v-col cols="12" md="7" class="hero-main">
        <!-- Brand -->
        <div class="mb-12">
          <h2 class="text-h4 font-weight-bold mb-1">
            Kevin Tech
          </h2>
          <v-chip variant="tonal" color="primary" size="small" label>
            Full-Stack Developer
          </v-chip>
        </div>

        <!-- Title -->
        <h1 class="hero-title mb-4">
          Desarrollo Software que
          <span class="highlight-text">Impulsa Negocios</span>
        </h1>

        <p class="hero-description mb-8">
          5+ años entregando soluciones digitales que funcionan de verdad. El
          código es mi chamba - si no está perfecto, no sale. Resultados
          garantizados.
        </p>

        <!-- Metrics -->
        <div class="d-flex flex-wrap ga-4 mb-8">
          <v-sheet
            v-for="metric in [
              { number: '50+', label: 'Proyectos' },
              { number: '5+', label: 'Años' },
              { number: '100%', label: 'Chamba' },
            ]"
            :key="metric.label"
            class="metric-card pa-4 text-center"
            rounded="lg"
            border
          >
            <div class="text-h4 font-weight-bold text-primary">
              {{ metric.number }}
            </div>
            <div class="text-caption text-medium-emphasis text-uppercase font-weight-medium" style="letter-spacing: 0.05em;">
              {{ metric.label }}
            </div>
          </v-sheet>
        </div>

        <!-- CTAs -->
        <div class="d-flex flex-wrap ga-4">
          <v-btn
            size="large"
            color="primary"
            href="#proyectos"
            rounded="lg"
            class="text-none font-weight-bold"
          >
            Ver Proyectos
          </v-btn>
          <v-btn
            variant="outlined"
            size="large"
            color="primary"
            href="#contacto"
            rounded="lg"
            class="text-none font-weight-bold"
          >
            Contactar
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="hero-visual">
        <!-- Code Window -->
        <div class="decorated-terminal">
          <div class="terminal-decoration">
            <div class="skull-decoration">💀</div>
            <div class="flower-decoration">🌹</div>
          </div>

          <v-card class="code-window" rounded="lg" elevation="0">
            <v-card-title class="window-header d-flex align-center justify-space-between pa-3">
              <div class="d-flex ga-2">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="text-caption font-weight-bold" style="font-family: 'JetBrains Mono', 'Fira Code', monospace;">
                developer.js
              </span>
            </v-card-title>

            <v-divider />

            <v-card-text class="code-content pa-6">
              <div class="code-line">
                <span class="text-primary">const</span>
                <span class="text-secondary"> developer</span> = {
              </div>
              <div class="code-line indent">
                <span class="text-tertiary">name:</span>
                <span class="code-string"> "Kevin"</span>,
              </div>
              <div class="code-line indent">
                <span class="text-tertiary">skills:</span> [<span class="code-string">"Vue"</span>, <span class="code-string">"Node"</span>, <span class="code-string">"Python"</span>],
              </div>
              <div class="code-line indent">
                <span class="text-tertiary">passion:</span>
                <span class="code-string"> "{{ currentMessage }}"</span>
              </div>
              <div class="code-line">}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  min-height: 90vh;
  background: rgb(var(--v-theme-background));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
}

/* Day of the Dead Background Patterns */
.dotd-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.15;
}

.skull-pattern, .flower-pattern, .marigold-pattern {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.skull-1 { top: 20%; left: 10%; }
.skull-2 { top: 70%; right: 20%; animation-delay: 2s; }
.skull-3 { top: 40%; left: 80%; animation-delay: 4s; }
.flower-1 { top: 10%; right: 30%; animation-delay: 1s; color: rgb(var(--v-theme-primary)); }
.flower-2 { bottom: 20%; left: 20%; animation-delay: 3s; color: rgb(var(--v-theme-secondary)); }
.flower-3 { top: 60%; left: 5%; animation-delay: 5s; color: rgb(var(--v-theme-tertiary)); }
.marigold-1 { top: 30%; right: 10%; animation-delay: 1.5s; color: rgb(var(--v-theme-primary)); }
.marigold-2 { bottom: 40%; right: 70%; animation-delay: 3.5s; color: rgb(var(--v-theme-secondary)); }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.hero-content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.highlight-text {
  color: rgb(var(--v-theme-primary));
  position: relative;
}

.highlight-text::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)), rgb(var(--v-theme-tertiary)));
  border-radius: 2px;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.7;
  max-width: 600px;
}

/* Metrics */
.metric-card {
  background: rgba(var(--v-theme-on-surface), 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
}

.metric-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(var(--v-theme-primary), 0.15);
}

/* Terminal */
.decorated-terminal {
  position: relative;
  max-width: 450px;
}

.terminal-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 2;
}

.skull-decoration {
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0 0 10px rgba(var(--v-theme-primary), 0.5));
  animation: pulse-decoration 3s ease-in-out infinite;
}

.flower-decoration {
  font-size: 1.5rem;
  position: absolute;
  top: 40px;
  right: 20px;
  color: rgb(var(--v-theme-secondary));
  animation: pulse-decoration 3s ease-in-out infinite reverse;
}

@keyframes pulse-decoration {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.code-window {
  background: rgba(var(--v-theme-surface), 0.95) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  backdrop-filter: blur(10px);
}

.window-header {
  background: rgba(var(--v-theme-primary), 0.08);
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28ca42; }

.code-content {
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

.code-line { display: block; margin-bottom: 0.25rem; }
.indent { padding-left: 1.5rem; }
.text-secondary { color: rgb(var(--v-theme-secondary)); }
.text-tertiary { color: rgb(var(--v-theme-tertiary)); }
.code-string { color: #f39c12; }

/* Responsive */
@media (max-width: 960px) {
  .hero-container { padding: 3rem 1rem; }
  .hero-title { font-size: 2.5rem; }
}

@media (max-width: 600px) {
  .hero-container { padding: 2rem 1rem; }
  .hero-title { font-size: 2rem; text-align: center; }
  .hero-description { font-size: 1.125rem; text-align: center; }
  .decorated-terminal { margin-top: 3rem; }
}
</style>
