<template>
  <section class="contact-section" id="contacto">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-contact">
      <div class="skull-pattern skull-contact-1">💀</div>
      <div class="skull-pattern skull-contact-2">💀</div>
      <div class="flower-pattern flower-contact-1">🌺</div>
      <div class="flower-pattern flower-contact-2">🌸</div>
      <div class="flower-pattern flower-contact-3">🌹</div>
      <div class="marigold-pattern marigold-contact-1">🧡</div>
    </div>

    <v-container class="position-relative" style="z-index: 10; max-width: 1200px;">
      <v-row align="stretch" class="pa-0">
        <v-col cols="12" md="12" lg="6" class="d-flex pa-3">
          <v-card class="contact-info-card flex-grow-1 pa-10" elevation="0">
            <div class="section-tag mb-6">Contacto</div>
            <h2 class="contact-title mb-6">
              ¿Listo para hacer realidad
              <span class="highlight-text">tu próximo proyecto?</span>
            </h2>
            <p class="contact-description mb-12">
              Cuéntame sobre tu idea y trabajemos juntos para crear algo
              increíble. Respondo en menos de 24 horas.
            </p>

            <div class="mb-12">
              <div class="contact-method d-flex align-center justify-space-between mb-8 pa-6">
                <div class="method-icon email mr-6">
                  <v-icon size="24">mdi-email</v-icon>
                </div>
                <div class="flex-grow-1 d-flex flex-column justify-center">
                  <h4 class="method-title mb-1">Email</h4>
                  <p class="method-detail mb-1">xopa.kevin.x@gmail.com</p>
                  <p class="method-note">Respuesta en 24h</p>
                </div>
                <v-btn
                  class="method-btn"
                  variant="outlined"
                  size="small"
                  color="primary"
                  :href="`mailto:xopa.kevin.x@gmail.com`"
                  target="_blank"
                >
                  <v-icon start size="16">mdi-open-in-new</v-icon>
                  Enviar
                </v-btn>
              </div>

              <div class="contact-method d-flex align-center justify-space-between mb-8 pa-6">
                <div class="method-icon whatsapp mr-6">
                  <v-icon size="24">mdi-whatsapp</v-icon>
                </div>
                <div class="flex-grow-1 d-flex flex-column justify-center">
                  <h4 class="method-title mb-1">WhatsApp</h4>
                  <p class="method-detail mb-1">+52 249 179 4353</p>
                  <p class="method-note">Respuesta inmediata</p>
                </div>
                <v-btn
                  class="method-btn"
                  variant="outlined"
                  size="small"
                  color="primary"
                  :href="`https://wa.me/5212491794353`"
                  target="_blank"
                >
                  <v-icon start size="16">mdi-open-in-new</v-icon>
                  Chatear
                </v-btn>
              </div>

              <div class="contact-method d-flex align-center justify-space-between mb-8 pa-6">
                <div class="method-icon linkedin mr-6">
                  <v-icon size="24">mdi-linkedin</v-icon>
                </div>
                <div class="flex-grow-1 d-flex flex-column justify-center">
                  <h4 class="method-title mb-1">LinkedIn</h4>
                  <p class="method-detail mb-1">kevin-ochoa-xopa-88a454219</p>
                  <p class="method-note">Networking profesional</p>
                </div>
                <v-btn
                  class="method-btn"
                  variant="outlined"
                  size="small"
                  color="primary"
                  href="https://linkedin.com/in/kevin-ochoa-xopa-88a454219"
                  target="_blank"
                >
                  <v-icon start size="16">mdi-open-in-new</v-icon>
                  Conectar
                </v-btn>
              </div>

              <div class="contact-method d-flex align-center justify-space-between mb-8 pa-6">
                <div class="method-icon github mr-6">
                  <v-icon size="24">mdi-github</v-icon>
                </div>
                <div class="flex-grow-1 d-flex flex-column justify-center">
                  <h4 class="method-title mb-1">GitHub</h4>
                  <p class="method-detail mb-1">kevin-xopa</p>
                  <p class="method-note">Código y proyectos</p>
                </div>
                <v-btn
                  class="method-btn"
                  variant="outlined"
                  size="small"
                  color="primary"
                  href="https://github.com/kevin-xopa"
                  target="_blank"
                >
                  <v-icon start size="16">mdi-open-in-new</v-icon>
                  Ver código
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="12" lg="6" class="d-flex pa-3">
          <v-card class="form-card flex-grow-1" elevation="0">
            <div class="form-decoration">
              <div class="skull-decoration-form">💀</div>
              <div class="flower-decoration-form">🌹</div>
            </div>
            <div class="form-content pa-10">
              <h3 class="form-title mb-2">Envíame un mensaje</h3>
              <p class="form-subtitle mb-8">
                Completa el formulario y me pondré en contacto contigo pronto
              </p>

              <v-form
                ref="contactForm"
                v-model="formValid"
                @submit.prevent="submitForm"
              >
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.name"
                      label="Nombre"
                      variant="outlined"
                      :rules="nameRules"
                      required
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      variant="outlined"
                      :rules="emailRules"
                      required
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="form.company"
                  label="Empresa (opcional)"
                  variant="outlined"
                  class="mb-4"
                ></v-text-field>

                <v-select
                  v-model="form.service"
                  :items="serviceOptions"
                  label="Tipo de proyecto"
                  variant="outlined"
                  required
                  class="mb-4"
                ></v-select>

                <v-textarea
                  v-model="form.message"
                  label="Cuéntame sobre tu proyecto"
                  variant="outlined"
                  :rules="messageRules"
                  rows="4"
                  required
                  class="mb-4"
                ></v-textarea>

                <v-checkbox
                  v-model="form.newsletter"
                  label="Quiero recibir actualizaciones sobre nuevos proyectos"
                  class="mb-8"
                ></v-checkbox>

                <v-btn
                  type="submit"
                  class="submit-btn"
                  color="primary"
                  size="large"
                  block
                  :loading="isSubmitting"
                  :disabled="!formValid"
                >
                  Enviar mensaje
                  <v-icon end>mdi-send</v-icon>
                </v-btn>
              </v-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formValid: false,
      isSubmitting: false,
      form: {
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        newsletter: false,
      },
      serviceOptions: [
        "Desarrollo Web Full-Stack",
        "Aplicación Móvil",
        "API & Integraciones",
        "Consultoría Tecnológica",
        "Otro",
      ],
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) => v.length >= 2 || "Mínimo 2 caracteres",
      ],
      emailRules: [
        (v) => !!v || "El email es requerido",
        (v) => /.+@.+\..+/.test(v) || "Email debe ser válido",
      ],
      messageRules: [
        (v) => !!v || "El mensaje es requerido",
        (v) => v.length >= 10 || "Mínimo 10 caracteres",
      ],
    };
  },
  methods: {
    async submitForm() {
      if (!this.formValid) return;

      this.isSubmitting = true;

      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Aquí iría la lógica real de envío (EmailJS, Netlify Forms, etc.)
      console.log("Formulario enviado:", this.form);

      // Reset form
      this.resetForm();
      this.isSubmitting = false;

      // Mostrar mensaje de éxito (puedes usar un toast/snackbar)
      alert("¡Mensaje enviado correctamente! Te contactaré pronto.");
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        newsletter: false,
      };
      this.$refs.contactForm?.reset();
    },
  },
};
</script>

<style scoped>
/* DAY OF THE DEAD CONTACT SECTION */

.contact-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

/* Day of the Dead Background Patterns */
.dotd-bg-contact {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.08;
}

.skull-pattern,
.flower-pattern,
.marigold-pattern {
  position: absolute;
  font-size: 1.5rem;
  animation: float 8s ease-in-out infinite;
}

.skull-contact-1 {
  top: 25%;
  left: 8%;
  animation-delay: 0s;
}
.skull-contact-2 {
  bottom: 30%;
  right: 10%;
  animation-delay: 4s;
}
.flower-contact-1 {
  top: 15%;
  right: 20%;
  animation-delay: 1s;
  color: #ff6b9d;
}
.flower-contact-2 {
  bottom: 50%;
  left: 15%;
  animation-delay: 3s;
  color: #ff8e53;
}
.flower-contact-3 {
  top: 60%;
  left: 50%;
  animation-delay: 2s;
  color: #c44569;
}
.marigold-contact-1 {
  top: 80%;
  right: 35%;
  animation-delay: 2.5s;
  color: #f39c12;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}


.contact-info {
  position: relative;
}

/* Contact Info Card */
.contact-info-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
}

.contact-info-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 157, 0.3);
  box-shadow: 0 15px 30px rgba(255, 107, 157, 0.1);
}

.section-tag {
  display: inline-block;
  background: rgba(255, 107, 157, 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  border: 1px solid rgba(255, 107, 157, 0.2);
}

.contact-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.2;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
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
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
  border-radius: 2px;
}

.contact-description {
  font-size: 1.125rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.7;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}


.contact-method {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 157, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  gap: 1rem;
}

.contact-method:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 157, 0.2);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.1);
}

.method-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
}

.contact-method:hover .method-icon {
  transform: scale(1.1);
}

.method-icon.email {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8e53 100%);
}

.method-icon.whatsapp {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
}

.method-icon.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
}

.method-icon.github {
  background: linear-gradient(135deg, #333 0%, #1a1a1a 100%);
}


.method-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.method-detail {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.method-note {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface-variant));
  opacity: 0.7;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Method Buttons */
.method-btn {
  border: 1px solid rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  flex-shrink: 0;
}

.method-btn:hover {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
}


.contact-form {
  position: relative;
}

/* Form Decoration */
.form-decoration {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 5;
}

.skull-decoration-form {
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0 0 6px rgba(255, 107, 157, 0.3));
  animation: pulse-decoration 4s ease-in-out infinite;
}

.flower-decoration-form {
  font-size: 1.25rem;
  position: absolute;
  top: 25px;
  right: 15px;
  color: #ff8e53;
  animation: pulse-decoration 4s ease-in-out infinite reverse;
}

@keyframes pulse-decoration {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.form-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.form-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
}

.form-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 157, 0.3);
  box-shadow: 0 15px 30px rgba(255, 107, 157, 0.1);
}

.form-content {
  position: relative;
  z-index: 2;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.form-subtitle {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}



.submit-btn {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
}

/* Responsive Design */
@media (max-width: 960px) {
  .contact-section {
    padding: 4rem 0;
  }

  .contact-container {
    padding: 0 1rem;
  }

  .contact-content {
    gap: 2rem;
  }

  .contact-title {
    font-size: 2.25rem;
  }

  .form-content {
    padding: 2rem;
  }

  .form-decoration {
    top: -5px;
    right: -5px;
  }

  .skull-decoration-form {
    font-size: 1.25rem;
  }

  .flower-decoration-form {
    font-size: 1rem;
    top: 20px;
    right: 12px;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 3rem 0;
  }

  .contact-title {
    font-size: 1.875rem;
  }

  .contact-method {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 1rem;
  }

  .method-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .form-content {
    padding: 1.5rem;
  }

  .form-decoration {
    display: none;
  }
}
</style>