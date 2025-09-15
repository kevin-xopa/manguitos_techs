<template>
  <div class="tech-chip">
    <div class="circuit-lines"></div>
    <div class="tech-items">
      <v-tooltip v-for="(tech, i) in techStack" :key="i" top>
        <template v-slot:activator="{ on }">
          <div class="tech-icon" v-on="on">
            <v-img :src="tech.icon" contain height="40" />
          </div>
        </template>
        <span>{{ tech.name }}</span>
      </v-tooltip>
    </div>
  </div>
</template>
  
  <style>
.tech-chip {
  width: 600px;
  height: 400px;
  background: url("/mango-seed-circuit.svg");
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