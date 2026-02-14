<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary", "tertiary"].includes(v),
  },
  flip: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="wave-separator" :class="{ 'wave-flip': flip }">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      class="wave-svg"
    >
      <path
        class="wave-back"
        :class="`wave-${variant}`"
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
      />
      <path
        class="wave-front"
        :class="`wave-${variant}-front`"
        d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,60 1440,80 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
</template>

<style scoped>
.wave-separator {
  width: 100%;
  height: 80px;
  overflow: hidden;
  line-height: 0;
  position: relative;
  z-index: 2;
}

.wave-flip {
  transform: scaleY(-1);
}

.wave-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.wave-back {
  opacity: 0.15;
}

.wave-front {
  opacity: 0.08;
}

.wave-primary { fill: rgb(var(--v-theme-primary)); }
.wave-primary-front { fill: rgb(var(--v-theme-primary)); }
.wave-secondary { fill: rgb(var(--v-theme-secondary)); }
.wave-secondary-front { fill: rgb(var(--v-theme-secondary)); }
.wave-tertiary { fill: rgb(var(--v-theme-tertiary)); }
.wave-tertiary-front { fill: rgb(var(--v-theme-tertiary)); }
</style>
