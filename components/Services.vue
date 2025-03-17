<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Desarrollo Frontend",
    fruit: "Mango",
    emoji: "🥭",
    color: "#FFD700",
    phrase: "La cáscara perfecta que enamora",
    description: "Interfaces tan dulces como la pulpa de un mango maduro",
  },
  {
    title: "Backend Robustos",
    fruit: "Coco",
    emoji: "🥥",
    color: "#A0522D",
    phrase: "Núcleo duro, seguridad de hierro",
    description: "La base resistente que sostiene tu aplicación",
  },
  {
    title: "APIs Integradas",
    fruit: "Piña",
    emoji: "🍍",
    color: "#FFD700",
    phrase: "Dulce conectividad sin espinas",
    description: "Conexiones jugosas entre sistemas",
  },
  {
    title: "Machine Learning",
    fruit: "Uva",
    emoji: "🍇",
    color: "#6A0DAD",
    phrase: "Sabiduría que madura con el tiempo",
    description: "Algoritmos que aprenden como viñedos",
  },
  {
    title: "Mobile Apps",
    fruit: "Naranja",
    emoji: "🍊",
    color: "#FFA500",
    phrase: "El jugo de la innovación",
    description: "Apps tan refrescantes como un zumo recién exprimido",
  },
  {
    title: "Consultoría Tech",
    fruit: "Sandía",
    emoji: "🍉",
    color: "#FF6B6B",
    phrase: "Semillas de éxito tecnológico",
    description: "Cultivamos juntos tu proyecto",
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
  <v-container class="services-container" id="services">
    <h2 class="section-title">🍹 Juguemos con el código</h2>
    <p class="section-subtitle">Servicios con sabor a fruta fresca</p>

    <v-row class="fruit-cards">
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="fruit-card"
          elevation="0"
          :class="{ visible: isVisible[index] }"
          v-intersect="{
            handler: (e) => onIntersect(e.isIntersecting, index),
            options: { threshold: 0.3 },
          }"
          height="100%"
        >
          <div class="fruit-icon" :style="{ color: service.color }">
            {{ service.emoji }}
          </div>

          <h3 class="fruit-title">
            {{ service.title }}
            <span class="fruit-name">{{ service.fruit }}</span>
          </h3>

          <p class="fruit-phrase">{{ service.phrase }}</p>

          <div class="fruit-details">
            <p>{{ service.description }}</p>
            <v-btn
              class="fruit-btn"
              :style="{ backgroundColor: service.color }"
              depressed
            >
              Más jugo 🧃
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.services-container {
  padding: 4rem 0;
}

.section-title {
  font-family: "Pacifico", cursive;
  color: #2c3e50;
  text-align: center;
  font-size: 2.5rem;
}

.section-subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 3rem;
}

.fruit-cards {
  max-width: 1200px;
  margin: 0 auto;
}

.fruit-card {
  border-radius: 20px !important;
  padding: 2rem;
  margin: 1rem;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fruit-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.fruit-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.fruit-card:hover .fruit-icon {
  transform: rotate(15deg) scale(1.2);
}

.fruit-title {
  color: #2c3e50;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.fruit-name {
  color: #7f8c8d;
  font-size: 1rem;
  display: block;
}

.fruit-phrase {
  color: #e74c3c;
  font-style: italic;
  margin-bottom: 1rem;
}

.fruit-details {
  border-top: 2px dashed #ecf0f1;
  padding-top: 1rem;
}

.fruit-details p {
  color: #7f8c8d;
  line-height: 1.6;
}

.fruit-btn {
  margin-top: 1rem;
  color: white !important;
  border-radius: 15px !important;
  transition: transform 0.3s ease;
}

.fruit-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
