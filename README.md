# Proyecto 01 - Frontend

# Cabañas SurVal — Portafolio de Corretaje de Propiedades Accesible

Este repositorio contiene el prototipo e interfaz web del sistema **Cabañas SurVal**, desarrollado como evaluación **P2 (Presentación Oral / Interface Portafolio)** para la asignatura **Desarrollo de Frontend (ICINF1107)** en la Universidad Católica de Temuco.

---

## 🎯 1. Definición de Audiencia y Propósito (Criterio A)

### Audiencia Objetivo
1. **Turistas y Clientes de Arriendo:** Personas que buscan alquilar una cabaña en el sur de Chile de manera rápida, clara y sin barreras de accesibilidad.
2. **Propietarios de Cabañas:** Dueños de inmuebles que requieren una plataforma profesional para promocionar sus propiedades y gestionar reservas.
3. **Lectores con Discapacidad Visual o Motora:** Usuarios que navegan mediante lectores de pantalla (NVDA, JAWS) o exclusivamente a través del teclado.

### Necesidades Identificadas
* Visualizar las características clave de cada propiedad (capacidad, precio, ubicación, equipamiento).
* Contar con descripciones textuales detalladas y transcripciones para archivos multimedia (video).
* Un formulario de contacto claro y de fácil llenado en dispositivos móviles y de escritorio.

---

## 🏗️ 2. Arquitectura del Proyecto y Estructura Semántica (Criterio B1 y B4)

El proyecto respeta el principio de **Cero Sopa de Divs**, utilizando únicamente etiquetas semánticas de HTML5 para garantizar un árbol accesible (*Accessibility Tree*) limpio.

```text
mvaldes2026-proyecto02-frontend/
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos CSS externos y media queries
│   ├── js/
│   │   └── main.js           # Archivo JS para futuras expansiones
│   ├── img/                  # Imágenes con textos alternativos optimizados
│   └── video/                # Recursos multimedia con subtítulos/transcripción
├── index.html                # Documento HTML5 semántico sin DIVs
├── uso_ia.md                 # Documentación del uso ético y estructurado de IA
└── README.md                 # Documentación general de la entrega