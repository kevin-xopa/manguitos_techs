<script setup>
import { ref } from "vue";

const techStack = ref([
  { name: "Vue.js", icon: "/assets/icons/vue.svg" },
  { name: "React", icon: "/assets/icons/react.svg" },
  { name: "Node.js", icon: "/assets/icons/node.svg" },
  { name: "Python", icon: "/assets/icons/python.svg" },
]);
</script>

<template>
  <div class="tech-chip">
    <div class="tech-items">
      <v-tooltip v-for="(tech, i) in techStack" :key="i" location="top">
        <template v-slot:activator="{ props }">
          <div class="tech-icon" v-bind="props">
            <v-img :src="tech.icon" contain height="40" />
          </div>
        </template>
        <span>{{ tech.name }}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<style scoped>
.tech-chip {
  width: 600px;
  height: 400px;
  position: relative;
  margin: 0 auto;
}

.tech-items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
</style>
