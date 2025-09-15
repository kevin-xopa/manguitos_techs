<template>
  <section class="about-section" id="sobre-mi">
    <!-- Day of the Dead Background -->
    <div class="dotd-bg-about">
      <div class="skull-pattern skull-about-1">💀</div>
      <div class="skull-pattern skull-about-2">💀</div>
      <div class="flower-pattern flower-about-1">🌺</div>
      <div class="flower-pattern flower-about-2">🌹</div>
      <div class="flower-pattern flower-about-3">🌸</div>
      <div class="marigold-pattern marigold-about-1">🧡</div>
      <div class="marigold-pattern marigold-about-2">🧡</div>
    </div>

    <v-container class="about-container">
      <div class="about-content">
        <div class="about-image-section">
          <div class="profile-decoration">
            <div class="skull-decoration">💀</div>
            <div class="flower-decoration">🌹</div>
          </div>

          <div class="profile-card">
            <div class="profile-image">
              <div class="profile-photo">
                <img src="/assets/images/profile.jpeg" alt="Kevin Ochoa - Full-Stack Developer" class="profile-img">
              </div>
            </div>

            <div class="profile-info">
              <h3 class="profile-name">Kevin</h3>
              <p class="profile-title">Full-Stack Developer</p>

              <div class="profile-stats">
                <div class="stat-item">
                  <span class="stat-number">5+</span>
                  <span class="stat-label">Años</span>
                </div>
                <div class="stat-separator">•</div>
                <div class="stat-item">
                  <span class="stat-number">50+</span>
                  <span class="stat-label">Proyectos</span>
                </div>
                <div class="stat-separator">•</div>
                <div class="stat-item">
                  <span class="stat-number">100%</span>
                  <span class="stat-label">Chamba</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-text-section">
          <div class="section-tag">Sobre Mí</div>
          <h2 class="about-title">
            Construyendo el futuro
            <span class="highlight-text">una línea de código a la vez</span>
          </h2>

          <div class="about-description">
            <p>
              Desarrollador full-stack con más de 5 años entregando soluciones digitales robustas.
              Para mí el código es chamba, no hobby - cada proyecto debe quedar perfecto o no sale.
            </p>
            <p>
              Si no está listo, no soy yo. Si está mal, lo soluciono. Si se puede mejorar, lo hago.
              Mi trabajo habla por sí solo: código limpio, arquitecturas sólidas, resultados garantizados.
            </p>
          </div>

          <div class="skills-showcase">
            <h4 class="skills-title">Mi Arsenal Tecnológico</h4>

            <div class="skills-grid">
              <div class="skill-category">
                <div class="category-header">
                  <span class="category-icon">🎨</span>
                  <h5 class="category-title">Frontend</h5>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">Nuxt</span>
                </div>
              </div>

              <div class="skill-category">
                <div class="category-header">
                  <span class="category-icon">⚙️</span>
                  <h5 class="category-title">Backend</h5>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">FastAPI</span>
                  <span class="skill-tag">PostgreSQL</span>
                </div>
              </div>

              <div class="skill-category">
                <div class="category-header">
                  <span class="category-icon">📱</span>
                  <h5 class="category-title">Mobile & Tools</h5>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">React Native</span>
                  <span class="skill-tag">Flutter</span>
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">Docker</span>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <v-btn
              class="contact-cta"
              color="primary"
              size="large"
              href="#contacto"
            >
              Trabajemos juntos
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
/* DAY OF THE DEAD ABOUT SECTION */

.about-section {
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

/* Day of the Dead Background Patterns */
.dotd-bg-about {
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

.skull-about-1 { top: 20%; left: 8%; animation-delay: 0s; }
.skull-about-2 { bottom: 30%; right: 12%; animation-delay: 3s; }
.flower-about-1 { top: 50%; right: 5%; animation-delay: 1s; color: #ff6b9d; }
.flower-about-2 { bottom: 50%; left: 10%; animation-delay: 4s; color: #ff8e53; }
.flower-about-3 { top: 15%; left: 45%; animation-delay: 2s; color: #c44569; }
.marigold-about-1 { top: 75%; left: 25%; animation-delay: 1.5s; color: #f39c12; }
.marigold-about-2 { top: 40%; right: 35%; animation-delay: 3.5s; color: #e67e22; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

/* About Image Section */
.about-image-section {
  position: relative;
  display: flex;
  justify-content: center;
}

/* Profile Decoration */
.profile-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 5;
}

.skull-decoration {
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.3));
  animation: pulse-decoration 4s ease-in-out infinite;
}

.flower-decoration {
  font-size: 1.5rem;
  position: absolute;
  top: 30px;
  right: 15px;
  color: #ff8e53;
  animation: pulse-decoration 4s ease-in-out infinite reverse;
}

@keyframes pulse-decoration {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* Profile Card */
.profile-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 157, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 320px;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff6b9d, #ff8e53, #c44569);
}

.profile-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 157, 0.4);
  box-shadow: 0 20px 40px rgba(255, 107, 157, 0.15);
}

.profile-image {
  margin-bottom: 1.5rem;
  text-align: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 15px 30px rgba(255, 107, 157, 0.3);
  transition: transform 0.3s ease;
  border: 3px solid rgba(255, 107, 157, 0.3);
}

.profile-card:hover .profile-photo {
  transform: scale(1.05);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-card:hover .profile-img {
  transform: scale(1.1);
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.profile-title {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-bottom: 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.stat-separator {
  color: rgb(var(--v-theme-on-surface-variant));
  opacity: 0.5;
  align-self: center;
  font-size: 0.75rem;
}

/* About Text Section */
.about-text-section {
  max-width: 600px;
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
  margin-bottom: 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  border: 1px solid rgba(255, 107, 157, 0.2);
}

.about-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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

.about-description {
  font-size: 1.125rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.7;
  margin-bottom: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.about-description p {
  margin-bottom: 1rem;
}

.about-description p:last-child {
  margin-bottom: 0;
}

/* Skills Showcase */
.skills-showcase {
  margin: 3rem 0;
}

.skills-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.skills-grid {
  display: grid;
  gap: 2rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 157, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 107, 157, 0.2);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.category-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(255, 107, 157, 0.2));
}

.category-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: rgba(255, 107, 157, 0.1);
  color: rgb(var(--v-theme-primary));
  border: 1px solid rgba(255, 107, 157, 0.2);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(255, 107, 157, 0.2);
  transform: translateY(-1px);
}

/* CTA Section */
.cta-section {
  margin-top: 3rem;
}

.contact-cta {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  padding: 0.75rem 2rem !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.contact-cta:hover::before {
  left: 100%;
}

.contact-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
}

/* Responsive Design */
@media (max-width: 960px) {
  .about-section {
    padding: 4rem 0;
  }

  .about-container {
    padding: 0 1rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .about-text-section {
    order: 2;
  }

  .about-image-section {
    order: 1;
  }

  .about-title {
    font-size: 2.25rem;
  }

  .profile-card {
    margin: 0 auto;
  }

  .profile-decoration {
    top: -15px;
    right: -15px;
  }

  .skull-decoration {
    font-size: 1.75rem;
  }

  .flower-decoration {
    font-size: 1.25rem;
    top: 25px;
    right: 12px;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 3rem 0;
  }

  .about-title {
    font-size: 1.875rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .profile-card {
    padding: 1.5rem;
    max-width: 280px;
  }

  .profile-placeholder {
    width: 120px;
    height: 120px;
  }

  .profile-emoji {
    font-size: 2.5rem;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .profile-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .stat-separator {
    display: none;
  }

  .skills-grid {
    gap: 1rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .skill-tags {
    gap: 0.25rem;
  }

  .skull-decoration {
    font-size: 1.5rem;
  }

  .flower-decoration {
    font-size: 1rem;
    top: 20px;
    right: 10px;
  }
}
</style>