# 🏔️ Cabañas Surval — Turismo Accesible e Intercultural

Plataforma web de difusión y reserva para **Cabañas Surval**, orientada al turismo accesible e intercultural en la Región de La Araucanía, Chile. Proyecto desarrollado para la asignatura de **Desarrollo de Frontend (ICINF1107)** en la **Universidad Católica de Temuco**.

---

## 🌟 Características Principales

* **Estructura Semántica Pura (HTML5):** Uso riguroso de etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`) sin uso superfluo de contenedores genéricos.
* **Accesibilidad Web (WCAG 2.1 - Niveles A y AA):**
  * Navegación completa mediante teclado (indicadores visuales con `:focus-visible` de alto contraste).
  * Regiones WAI-ARIA y compatibilidad con lectores de pantalla (NVDA, VoiceOver, Narrador).
  * Enlace de salto rápido (`.sr-only`) para saltar directamente al contenido principal.
  * Inclusión lingüística intercultural (Español / Mapudungun).
* **Diseño Responsivo con Identidad Territorial (CSS3):**
  * Paleta cromática inspirada en la naturaleza sureña (Verde Araucaria `#1B4D3E`, Azul Lago `#1E5B70`, Madera Roble `#8B5A2B`).
  * **3 Breakpoints Responsivos:** Adaptación fluida para Móvil (<768px), Tablet (≥768px) y Escritorio (≥1024px).
* **Multimedia Accesible:**
  * Reproductor `<video>` integrado con atributo `poster`, subtítulos `<track>` y transcripción textual completa en un componente colapsable `<details>`.
* **Interactividad Dinámica (JavaScript):**
  * **Cotizador Dinámico:** Cálculo en tiempo real de tarifas estimadas en pesos chilenos (`CLP`) según la cabaña seleccionada.
  * **Validación Accesible de Formulario:** Notificación interactiva de errores en vivo (`aria-invalid="true"`, `role="alert"`) e integración de un modal de confirmación (*Chaltumay*).

---

## 📁 Estructura del Proyecto

```text
mvaldes2026-proyecto02-frontend/
├── assets/
│   ├── styles/
│   │   └── style.css          # Estilos globales y breakpoints responsivos
│   ├── script/
│   │   └── script.js            # Cotizador dinámico y validación accesible
│   ├── img/                   # Recursos gráficos e imágenes descriptivas
│   └── video/                 # Recorrido en video de las instalaciones
├── index.html                 # Documento HTML principal accesible
├── uso_ia.md                  # Declaración de uso de IA generativa y prompts
└── README.md                  # Documentación del proyecto