<template>
  <v-container fluid class="hero-container pa-0">
    <v-row align="center" class="fill-height mx-auto" style="max-width: 1400px">
      <v-col cols="12" md="7" class="pl-10">
        <div class="logo mb-6">
          <span class="mango-slice">🍋</span>
          <span class="text-h3 font-weight-bold primary--text">MANGUITOS</span>
          <span class="text-h3 font-weight-bold secondary--text ml-2">
            TECHS
          </span>
        </div>

        <h1 class="hero-title mb-4">
          <span class="code-line">CÓDIGO</span>
          <span class="mango-verb">
            CON
            <span class="yellow-wave">🥭</span>
            SABOR
          </span>
        </h1>

        <!-- Subtítulo -->
        <div class="hero-subtitle mb-8">
          Desarrollamos software que desafía lo convencional.<br />

          <p class="hero-subtitle mb-8">
            <span class="code-comment">// {{ currentSlogan }}</span>
          </p>
        </div>

        <v-btn
          x-large
          class="cta-button"
          color="secondary"
          @mouseover="startPeelAnimation"
          @mouseleave="stopPeelAnimation"
        >
          <a href="#services" class="text-decoration-none">PELAR PROBLEMAS →</a>
          <div class="mango-peel" :class="{ peeling: isPeeling }"></div>
        </v-btn>
      </v-col>

      <v-col cols="12" md="5" class="pr-10">
        <div class="mango-circuit">
          <img
            src="public/mango-dev.png"
            class="circuit-mango"
            alt="Mango Tecnológico"
            width="100%"
          />
          <div class="glow mt-6 pr-1"></div>
        </div>
      </v-col>
    </v-row>
    <v-divider inset></v-divider>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slogans: [
      "Dulce por fuera, potente por dentro",
      "No pelamos código, pelamos problemas",
      "Cultivamos soluciones jugosas",
      "Endulzamos tu experiencia tecnológica",
    ],
    currentSlogan: "",
    isPeeling: false,
  }),
  mounted() {
    this.rotateSlogans();
  },
  methods: {
    rotateSlogans() {
      let index = 0;
      setInterval(() => {
        this.currentSlogan = this.slogans[index];
        index = (index + 1) % this.slogans.length;
      }, 3000);
    },
    startPeelAnimation() {
      this.isPeeling = true;
    },
    stopPeelAnimation() {
      this.isPeeling = false;
    },
  },
};
</script>

<style scoped>
/* Paleta de colores */
:root {
  --mango-yellow: #ffc300;
  --mango-pulp: #fff3e0;
  --tech-black: #1a1a1a;
  --code-green: #00ff88;
  --tech-gray: #333;
  --tech-blue: #4a90e2;
}

.hero-container {
  height: 100vh;
  background: var(--tech-black);
  position: relative;
  overflow: hidden;
}

.background-left {
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, var(--tech-black), var(--tech-gray));
  opacity: 0.8;
  z-index: 0;
}

.background-right {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  background: url("/tech-background.png"); /* Reemplaza con tu imagen de fondo técnico */
  background-size: cover;
  opacity: 0.6;
  z-index: 0;
}

.logo {
  font-family: "Montserrat", sans-serif; /* Cambia la tipografía */
  letter-spacing: -2px;
}

.mango-slice {
  font-size: 2.5rem;
  margin-right: 15px;
  filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.5));
}

.hero-title {
  font-family: "Montserrat", sans-serif; /* Cambia la tipografía */
  font-size: 4.5rem;
  line-height: 1;
  text-transform: uppercase;
}

.code-line {
  color: var(--code-green);
  text-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

.mango-verb {
  color: var(--mango-yellow);
  position: relative;
  display: inline-block;
}

.yellow-wave {
  position: absolute;
  right: -40px;
  top: -25px;
  animation: wave 2s infinite;
}

.hero-subtitle {
  font-family: "Montserrat", sans-serif; /* Cambia la tipografía */
  font-size: 1.8rem;
  color: var(--mango-pulp);
}

.code-comment {
  color: #6c757d;
  font-style: italic;
}

.cta-button {
  background: transparent !important;
  border: 3px solid var(--mango-yellow) !important;
  color: var(--mango-yellow) !important;
  border-radius: 0 !important;
  padding: 25px 40px !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s !important;
}

.mango-peel {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--mango-yellow) 50%,
    transparent 100%
  );
  transition: left 0.5s;
}

.peeling {
  left: 100%;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

.mango-circuit {
  position: relative;
  width: 100%;
}

.glow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 195, 0, 0.4) 0%,
    /* Amarillo */ rgba(255, 165, 0, 0.3) 30%,
    /* Naranja */ transparent 70%
  );
  animation: pulse 2s infinite;
  z-index: 0;
}

/* Nueva animación mejorada */
@keyframes pulse {
  0% {
    opacity: 0.8;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
    transform: scale(0.9);
  }
}

/* Asegurar que el mango esté por encima del glow */
.circuit-mango {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 30px var(--mango-yellow));
  /* ... resto de estilos ... */
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.3;
  }
}
</style>