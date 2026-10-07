# Declaración de Uso de Inteligencia Artificial Generativa

**Proyecto:** Cabañas Surval — Plataforma Web de Turismo Accesible e Intercultural  
**Asignatura:** Desarrollo de Frontend (ICINF1107) — Universidad Católica de Temuco  
**Estudiante:** Mauricio Valdés  
**Repositorio:** `mvaldes2026-proyecto02-frontend`  

---

## 1. Resumen de Asistencia de IA

En la elaboración de este proyecto se utilizó asistencia de Inteligencia Artificial (Gemini / LLM) como herramienta de apoyo técnico, arquitectura web accesible y generación de maquetación guiada. La IA fue utilizada principalmente en cuatro áreas de desarrollo:

1. **Estructuración Semántica HTML5 e Inclusión Territorial:** Diseño del marcado semántico (`header`, `nav`, `main`, `section`, `article`, `footer`), incorporación de roles WAI-ARIA, navegación multilingüe (Español/Mapudungun) y accesibilidad WCAG 2.1.
2. **Diseño CSS Responsivo e Identidad Local:** Creación de un sistema de variables cromáticas basadas en el entorno natural de La Araucanía (Verde Araucaria, Azul Lago Villarrica, Madera Roble), diseño adaptativo con 3 puntos de quiebre (*breakpoints* para móvil, tablet y escritorio) y estados de foco visibles de alto contraste.
3. **Multimedia Accesible:** Implementación del elemento `<video>` con atributos de soporte, subtítulos `<track>` y transcripciones textuales enriquecidas colapsables (`<details>`) vinculadas mediante `aria-describedby`.
4. **Interactividad y Dinamismo en JavaScript (`script.js`):**
   * **Cotizador Dinámico de Estancia:** Cálculo en tiempo real de tarifas estimadas en pesos chilenos (`CLP`) según la cabaña seleccionada por el usuario.
   * **Validación Accesible de Formulario:** Comprobación de campos obligatorios mediante expresiones regulares, gestión de errores con `aria-invalid` y `role="alert"`, anuncios de voz para lectores de pantalla con regiones vivas (`aria-live="polite"`) y modal accesible con saludo intercultural (*Chaltumay*).

---

## 2. Prompts Clave Utilizados y Bitácora de Interacción

| Fase de Desarrollo | Prompt / Solicitud a la IA | Salida / Resultado Generado | Validación y Ajuste Humano |
| :--- | :--- | :--- | :--- |
| **HTML / Accesibilidad** | *"Revisa y optimiza la estructura HTML de un sitio web de cabañas en el Sur de Chile para cumplir con WCAG 2.1, WAI-ARIA e inclusión intercultural."* | Estructura HTML5 con roles semánticos, navegación accesible y bloques de transcripción para medios temporales. | Se verificó que las rutas relativas de los archivos apuntaran correctamente a la carpeta `assets/`. |
| **Diseño y CSS** | *"Crea un archivo CSS responsivo con variables inspiradas en La Araucanía y 3 breakpoints (móvil, tablet, escritorio) con alto contraste para accesibilidad."* | Hoja de estilos con variables cromáticas orgánicas, cuadrículas Flexbox y Grid, y regla `:focus-visible` accesible. | Se realizaron pruebas de renderizado en navegador a 375px, 800px y 1200px. |
| **Multimedia** | *"¿Cómo estructurar un reproductor de video para que una persona ciega entienda su contenido?"* | Código de video con `figcaption`, `aria-describedby` y transcripción textual completa en un componente `<details>`. | Se validó la navegabilidad mediante la tecla `Tab` sin uso de ratón. |
| **JavaScript Interactivo** | *"Crea un script en JS para validar el formulario de contacto de forma accesible y un cotizador dinámico de tarifas según la cabaña elegida."* | Script en `script.js` que escucha eventos de cambio/envío, manipula el DOM, calcula precios en CLP y anuncia eventos a lectores de pantalla. | Se añadieron estilos CSS para resaltar campos con error (`aria-invalid="true"`) y para la ventana modal. |

---

## 3. Control, Supervisión y Validación Humana

Todo el código sugerido por la IA fue revisado, probado y adaptado manualmente por el estudiante antes de ser integrado al repositorio final:

* **Verificación de Errores e Integración (Go Live):** Se detectaron y corrigieron discrepancias entre las rutas de carpetas especificadas en el código (`assets/styles/`, `assets/script/`, `assets/video/`) y el árbol de archivos local.
* **Pruebas Responsivas:** Se comprobó el comportamiento adaptativo del sitio usando las Herramientas de Desarrollador del Navegador (`F12`) en anchos de pantalla correspondientes a dispositivos móviles (<768px), tablets (≥768px) y escritorios (≥1024px).
* **Control de Versiones y Git Semántico:** Cada avance significativo fue registrado en el repositorio local y remoto utilizando la convención de *Conventional Commits* (`feat:`, `fix:`) a través de la terminal Git Bash.

---

## 4. Reflexión Ética y Aprendizaje

El uso de la Inteligencia Artificial Generativa se aplicó como un catalizador de aprendizaje para comprender de manera práctica la implementación de las pautas de accesibilidad web **WCAG 2.1 (Niveles A y AA)** y el desarrollo responsivo moderno. La intervención humana garantizó la coherencia territorial del proyecto con la Región de La Araucanía y la correcta ejecución técnica de cada componente.