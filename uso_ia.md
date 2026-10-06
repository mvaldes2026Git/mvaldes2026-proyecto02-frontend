---

### 3. `uso_ia.md` (Actualizado con la consulta de Accesibilidad Lingüística)

```markdown
# Bitácora del Uso de Inteligencia Artificial (uso_ia.md)

**Estudiante:** Mauricio Valdés  
**Asignatura:** ICINF1107 — Desarrollo de Frontend (Sección 3)  
**Docente:** Cristian Iglesias Vera  
**Institución:** Universidad Católica de Temuco  

---

## 1. Propósito y Alcance del Uso de IA
Se utilizó un Gemini (LLM) como tutor de accesibilidad (WCAG 2.1), consultor en estándares semánticos de HTML5 y apoyo en la integración de accesibilidad multilingüe y territorial (Mapudungun/Inglés).

---

## 2. Prompts Clave y Evolución de la Interacción

### Prompt 1: Arquitectura Semántica Pura
> **Consulta:** *"Necesito un index.html para corretaje de cabañas SIN SOPA DE DIVS que cumpla la rúbrica de P2."*
> **Resultado:** Estructura basada en `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>` y `<fieldset>`.

### Prompt 2: Accesibilidad Lingüística Intercultural (La Araucanía)
> **Consulta:** *"¿Cómo implemento soporte de accesibilidad para Mapudungun e Inglés cumpliendo la norma WCAG 2.1 (3.1.2 Idioma de las partes) para lectores de pantalla?"*
> **Resultado:** Integración de la etiqueta ISO `lang="arn"` para Mapudungun y `lang="en"` para Inglés, permitiendo que sintetizadores de voz adapten la dicción.

### Prompt 3: Transcripciones Audiovisuales Accesibles
> **Consulta:** *"¿Cómo entrego la información de un video promocional a usuarios con discapacidad auditiva o visual en varios idiomas?"*
> **Resultado:** Incorporación de pistas `<track>` para subtítulos y bloques desplegables `<details>` con transcripciones textuales trilingües.

---

## 3. Validación y Criterio Humano

El estudiante revisó y ajustó todo el código generado:
1. **Supervisión Semántica:** Verificación de cero etiquetas `<div>` en el documento.
2. **Pertinencia Territorial:** Validación contextual de los términos en Mapudungun y ubicaciones de La Araucanía (Villarrica, Curacautín).
3. **Consistencia de Commits:** Organización del repositorio mediante la convención *Conventional Commits*.
