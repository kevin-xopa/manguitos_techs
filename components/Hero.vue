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
        <!-- Professional Brand -->
        <div class="brand-section mb-6">
          <div class="brand-logo">
            <span class="brand-name">Kevin Tech</span>
          </div>
          <p class="brand-tagline">Full-Stack Developer</p>
        </div>

        <!-- Professional Title -->
        <h1 class="hero-title mb-4">
          Desarrollo Software que
          <span class="highlight-text">Impulsa Negocios</span>
        </h1>

        <!-- Professional Description -->
        <p class="hero-description mb-8">
          5+ años entregando soluciones digitales que funcionan de verdad.
          El código es mi chamba - si no está perfecto, no sale. Resultados garantizados.
        </p>

        <!-- Professional Metrics -->
        <div class="metrics-container mb-8">
          <div class="metric-card">
            <div class="metric-number">50+</div>
            <div class="metric-label">Proyectos</div>
          </div>
          <div class="metric-card">
            <div class="metric-number">5+</div>
            <div class="metric-label">Años</div>
          </div>
          <div class="metric-card">
            <div class="metric-number">100%</div>
            <div class="metric-label">Chamba</div>
          </div>
        </div>

        <!-- Professional CTAs -->
        <div class="cta-buttons">
          <v-btn
            class="primary-cta"
            size="large"
            color="primary"
            href="#proyectos"
          >
            Ver Proyectos
          </v-btn>
          <v-btn
            class="secondary-cta"
            variant="outlined"
            size="large"
            href="#contacto"
          >
            Contactar
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="hero-visual">
        <!-- Decorated Code Window -->
        <div class="decorated-terminal">
          <div class="terminal-decoration">
            <div class="skull-decoration">💀</div>
            <div class="flower-decoration">🌹</div>
          </div>
          <div class="code-window">
            <div class="window-header">
              <div class="window-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="window-title">developer.js</span>
            </div>
            <div class="code-content">
              <div class="code-line">
                <span class="code-keyword">const</span>
                <span class="code-variable">developer</span> = {
              </div>
              <div class="code-line indent">
                <span class="code-property">name:</span>
                <span class="code-string">"Kevin"</span>,
              </div>
              <div class="code-line indent">
                <span class="code-property">skills:</span> [
                <span class="code-string">"Vue"</span>,
                <span class="code-string">"Node"</span>,
                <span class="code-string">"Python"</span>],
              </div>
              <div class="code-line indent">
                <span class="code-property">passion:</span>
                <span class="code-string">"{{ currentMessage }}"</span>
              </div>
              <div class="code-line">}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    currentMessage: "",
    messages: [
      "Creando soluciones digitales innovadoras",
      "Transformando ideas en código funcional",
      "Desarrollando con pasión y precisión",
      "Construyendo el futuro digital"
    ]
  }),
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations() {
      // Rotate messages
      let messageIndex = 0;
      this.currentMessage = this.messages[0];

      setInterval(() => {
        messageIndex = (messageIndex + 1) % this.messages.length;
        this.currentMessage = this.messages[messageIndex];
      }, 3000);
    }
  },
};
</script>

<style scoped>
/* DAY OF THE DEAD PROFESSIONAL THEME */

.hero-container {
  min-height: 90vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
}

/* Day of the Dead Background Patterns */
.dotd-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.15;
}

.skull-pattern,
.flower-pattern,
.marigold-pattern {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.skull-1 { top: 20%; left: 10%; animation-delay: 0s; }
.skull-2 { top: 70%; right: 20%; animation-delay: 2s; }
.skull-3 { top: 40%; left: 80%; animation-delay: 4s; }

.flower-1 { top: 10%; right: 30%; animation-delay: 1s; color: #ff6b9d; }
.flower-2 { bottom: 20%; left: 20%; animation-delay: 3s; color: #ff8e53; }
.flower-3 { top: 60%; left: 5%; animation-delay: 5s; color: #c44569; }

.marigold-1 { top: 30%; right: 10%; animation-delay: 1.5s; color: #f39c12; }
.marigold-2 { bottom: 40%; right: 70%; animation-delay: 3.5s; color: #e67e22; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Main Content */
.hero-content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
}

/* Professional Brand Section */
.brand-section {
  margin-bottom: 3rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

/* Removed mango emoji styles */

.brand-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.brand-tagline {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Professional Title */
.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: rgb(var(--v-theme-on-surface));
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
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
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
  border-radius: 2px;
}

/* Professional Description */
.hero-description {
  font-size: 1.25rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Professional Metrics */
.metrics-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.metric-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53);
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 157, 0.4);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.15);
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  line-height: 1;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Professional CTAs */
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-cta,
.secondary-cta {
  border-radius: 8px !important;
  padding: 0.75rem 2rem !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.primary-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.primary-cta:hover::before {
  left: 100%;
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
}

.secondary-cta {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
}

.secondary-cta:hover {
  transform: translateY(-2px);
  background: rgb(var(--v-theme-primary)) !important;
}

/* Decorated Terminal */
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
  filter: drop-shadow(0 0 10px rgba(255, 107, 157, 0.5));
  animation: pulse-decoration 3s ease-in-out infinite;
}

.flower-decoration {
  font-size: 1.5rem;
  position: absolute;
  top: 40px;
  right: 20px;
  color: #ff8e53;
  animation: pulse-decoration 3s ease-in-out infinite reverse;
}

@keyframes pulse-decoration {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.code-window {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 107, 157, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.window-header {
  background: rgba(255, 107, 157, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 107, 157, 0.2);
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28ca42; }

.window-title {
  color: rgb(var(--v-theme-on-surface));
  font-weight: 600;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.code-content {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.code-line {
  display: block;
  margin-bottom: 0.25rem;
}

.indent {
  padding-left: 1rem;
}

.code-keyword { color: #ff6b9d; }
.code-variable { color: #ff8e53; }
.code-property { color: #c44569; }
.code-string { color: #f39c12; }

/* Responsive Design */
@media (max-width: 960px) {
  .hero-container {
    padding: 3rem 1rem;
  }

  .hero-content-wrapper {
    padding: 0 0.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .metrics-container {
    gap: 1rem;
    justify-content: center;
  }

  .metric-card {
    padding: 1rem;
    min-width: 120px;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .primary-cta,
  .secondary-cta {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
    text-align: center;
  }

  .hero-description {
    font-size: 1.125rem;
    text-align: center;
  }

  .brand-section {
    text-align: center;
  }

  .metrics-container {
    flex-direction: column;
    align-items: center;
  }

  .metric-card {
    max-width: 200px;
    width: 100%;
  }

  .decorated-terminal {
    margin-top: 3rem;
  }

  .terminal-decoration {
    top: -10px;
    right: -10px;
  }

  .skull-decoration {
    font-size: 2rem;
  }

  .flower-decoration {
    font-size: 1.25rem;
  }
}
</style>