<script setup>
import { ref, reactive } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";

const { sectionRef, isVisible } = useScrollAnimation();

const formRef = ref();
const formValid = ref(false);
const loading = ref(false);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("success");

const form = reactive({
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
});

const rules = {
  required: (v) => !!v || "Este campo es requerido",
  email: (v) => /.+@.+\..+/.test(v) || "Email inválido",
};

const contactLinks = [
  {
    icon: "mdi-email-outline",
    text: "xopa.kevin.x@gmail.com",
    href: "mailto:xopa.kevin.x@gmail.com",
  },
  {
    icon: "mdi-whatsapp",
    text: "+52 (249) 179-4353",
    href: "https://wa.me/5212491794353",
    hoverClass: "link--whatsapp",
  },
  {
    icon: "mdi-linkedin",
    text: "LinkedIn",
    href: "https://linkedin.com/in/kevin-ochoa-xopa-88a454219",
  },
  {
    icon: "mdi-github",
    text: "GitHub",
    href: "https://github.com/kevin-xopa",
  },
];

const submitForm = async () => {
  if (!formValid.value) return;

  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));

  snackbarColor.value = "success";
  snackbarText.value = "¡Gracias! Me pondré en contacto contigo pronto.";
  snackbar.value = true;

  form.nombre = "";
  form.email = "";
  form.asunto = "";
  form.mensaje = "";
  formRef.value?.reset();

  loading.value = false;
};
</script>

<template>
  <section id="contacto" ref="sectionRef" class="contact-section">
    <v-container style="max-width: 1200px;">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <div class="contact-wrapper" :class="{ 'animate-scale-in': isVisible }">
            <!-- Left side — decorative -->
            <div class="contact-left">
              <div class="contact-left-content">
                <v-chip color="white" variant="outlined" size="small" label class="mb-4">
                  CONTACTO
                </v-chip>

                <h2 class="contact-title">
                  ¿Listo para hacer realidad tu próximo proyecto?
                </h2>
                <p class="contact-subtitle">
                  Cuéntame sobre tu idea y trabajemos juntos para crear algo increíble.
                  Respondo en menos de 24 horas.
                </p>

                <div class="contact-links">
                  <a
                    v-for="link in contactLinks"
                    :key="link.href"
                    :href="link.href"
                    target="_blank"
                    class="contact-link"
                    :class="link.hoverClass"
                  >
                    <v-icon size="20">{{ link.icon }}</v-icon>
                    <span>{{ link.text }}</span>
                  </a>
                </div>
              </div>

              <!-- Day of the Dead decorations -->
              <div class="deco deco--1">💀</div>
              <div class="deco deco--2">🌺</div>
              <div class="deco deco--3">🌸</div>
            </div>

            <!-- Right side — form -->
            <div class="contact-right">
              <div class="form-header">
                <h3 class="form-title">Envía un mensaje</h3>
                <p class="form-subtitle">Te contactaré en menos de 24 horas</p>
              </div>

              <v-form ref="formRef" v-model="formValid" @submit.prevent="submitForm">
                <div class="form-grid">
                  <v-text-field
                    v-model="form.nombre"
                    label="Nombre"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-account"
                    :rules="[rules.required]"
                    color="primary"
                  />
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-email"
                    :rules="[rules.required, rules.email]"
                    color="primary"
                  />
                </div>

                <v-text-field
                  v-model="form.asunto"
                  label="Asunto"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-text-short"
                  :rules="[rules.required]"
                  color="primary"
                  class="mb-1"
                />

                <v-textarea
                  v-model="form.mensaje"
                  label="¿En qué puedo ayudarte?"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-message-text"
                  rows="3"
                  auto-grow
                  color="primary"
                  class="mb-2"
                />

                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="loading"
                  :disabled="!formValid"
                  class="text-none font-weight-bold"
                  rounded="lg"
                >
                  <v-icon start>mdi-send</v-icon>
                  Enviar mensaje
                </v-btn>
              </v-form>

              <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
                {{ snackbarText }}
              </v-snackbar>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  background: transparent;
  position: relative;
  padding: 6rem 0;
}

.contact-wrapper {
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.15);
  opacity: 0;
}

/* Left side */
.contact-left {
  position: relative;
  flex: 0 0 42%;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), rgba(var(--v-theme-secondary), 0.9));
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.contact-left-content {
  position: relative;
  z-index: 2;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-primary));
  line-height: 1.2;
  margin-bottom: 16px;
}

.contact-subtitle {
  font-size: 0.95rem;
  color: rgba(var(--v-theme-on-primary), 0.85);
  line-height: 1.6;
  margin-bottom: 32px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(var(--v-theme-on-primary), 0.12);
  border-radius: 12px;
  color: rgb(var(--v-theme-on-primary));
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(var(--v-theme-on-primary), 0.22);
  transform: translateX(4px);
}

.link--whatsapp:hover {
  background: rgba(37, 211, 102, 0.35);
}

/* Day of the Dead decorations */
.deco {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  opacity: 0.15;
  animation: floatDeco 8s ease-in-out infinite;
}

.deco--1 {
  top: -10px;
  right: -10px;
  font-size: 4rem;
}

.deco--2 {
  bottom: 20px;
  left: -5px;
  font-size: 2.5rem;
  animation-delay: 2s;
}

.deco--3 {
  top: 45%;
  right: 10px;
  font-size: 2rem;
  animation-delay: 4s;
}

@keyframes floatDeco {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

/* Right side */
.contact-right {
  flex: 1;
  background: rgb(var(--v-theme-surface));
  padding: 48px 40px;
}

.form-header {
  margin-bottom: 28px;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 0.9rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 4px;
}

/* Animation */
.animate-scale-in {
  animation: scaleIn 0.7s ease-out forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .contact-section { padding: 4rem 0; }

  .contact-wrapper {
    flex-direction: column;
    border-radius: 20px;
  }

  .contact-left {
    flex: none;
    padding: 36px 28px;
  }

  .contact-title { font-size: 1.5rem; }

  .contact-right { padding: 32px 28px; }

  .form-grid { grid-template-columns: 1fr; }

  .deco--3 { display: none; }
}

@media (max-width: 600px) {
  .contact-section { padding: 3rem 0; }
  .contact-title { font-size: 1.35rem; }
  .contact-left { padding: 28px 20px; }
  .contact-right { padding: 28px 20px; }
}
</style>
