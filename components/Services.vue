<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Desarrollo de aplicaciones web y móviles",
    fruit: "Piña",
    emoji: "🍍",
    color: "#FFD700",
    phrase: "Versatilidad con sabor tropical",
    description:
      "Apps tan adaptables como la piña en la cocina, listas para cualquier dispositivo",
  },
  {
    title: "Desarrollo de software personalizado",
    fruit: "Fruta del Dragón",
    emoji: "🐉",
    color: "#FF6B6B",
    phrase: "Cultivamos tu idea exótica",
    description: "Soluciones únicas que destacan como esta joya tropical",
  },
  {
    title: "Desarrollo de APIs y integraciones",
    fruit: "Uva",
    emoji: "🍇",
    color: "#6A0DAD",
    phrase: "Racimos de conexiones jugosas",
    description: "Interconectamos sistemas como uvas en un racimo perfecto",
  },
  {
    title: "Desarrollo frontend",
    fruit: "Mango",
    emoji: "🥭",
    color: "#FFA500",
    phrase: "La piel perfecta de tu aplicación",
    description:
      "Interfaces tan irresistibles como la cáscara de un mango maduro",
  },
  {
    title: "Desarrollo backend",
    fruit: "Coco",
    emoji: "🥥",
    color: "#A0522D",
    phrase: "Núcleo duro, seguridad tropical",
    description: "Base sólida como el coco, protegiendo tu líquido vital",
  },
  {
    title: "Consultoría tecnológica",
    fruit: "Sandía",
    emoji: "🍉",
    color: "#FF4757",
    phrase: "Semillas de éxito tecnológico",
    description: "Plantamos las bases para tu cosecha digital",
  },
  {
    title: "Desarrollo de aplicaciones empresariales",
    fruit: "Banano",
    emoji: "🍌",
    color: "#FFE135",
    phrase: "Crecimiento estructurado y robusto",
    description: "Sistemas que escalan como racimos de banano en vertical",
  },
  {
    title: "Desarrollo de aplicaciones a gran escala",
    fruit: "Papaya",
    emoji: "🍈",
    color: "#FF7F50",
    phrase: "Grandes proyectos, grandes frutos",
    description: "Arquitecturas que soportan cosechas abundantes de datos",
  },
  {
    title: "Mantenimiento y soporte",
    fruit: "Naranja",
    emoji: "🍊",
    color: "#FFA500",
    phrase: "Jugo fresco para tu código",
    description: "Riego constante que mantiene tu software hidratado",
  },
  {
    title: "Desarrollo de IA y Machine Learning",
    fruit: "Granada",
    emoji: "🧅",
    color: "#FF0000",
    phrase: "Semillas inteligentes que evolucionan",
    description:
      "Algoritmos que maduran como frutos en el árbol del conocimiento",
  },
  {
    title: "Optimización y rendimiento",
    fruit: "Limón",
    emoji: "🍋",
    color: "#FFD700",
    phrase: "Exprimimos al máximo tu código",
    description: "Eliminamos la acidez técnica para un rendimiento dulce",
  },
  {
    title: "Desarrollo de aplicaciones IoT",
    fruit: "Mora",
    emoji: "🫐",
    color: "#4B0082",
    phrase: "Pequeños frutos, gran conectividad",
    description:
      "Dispositivos interconectados como un arbusto de moras digitales",
  },
  {
    title: "Outsourcing de desarrollo",
    fruit: "Kiwi",
    emoji: "🥝",
    color: "#8DB600",
    phrase: "Prestamos nuestra vitamina tecnológica",
    description: "Equipos frescos listos para nutrir tu proyecto",
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
