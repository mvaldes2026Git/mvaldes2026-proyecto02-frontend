/* ==========================================================================
   CABAÑAS SURVAL — LÓGICA Y VALIDACIÓN ACCESIBLE
   Asignatura: Desarrollo de Frontend - UC Temuco
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Selección de elementos del DOM
  const formContacto = document.querySelector('form');
  const inputNombre = document.getElementById('nombre');
  const inputEmail = document.getElementById('email');
  const selectCabana = document.getElementById('cabana');
  const inputMensaje = document.getElementById('mensaje');

  // Crear Región Viva invisible para anuncios a Lectores de Pantalla (WCAG)
  const regionAnuncios = document.createElement('div');
  regionAnuncios.setAttribute('role', 'status');
  regionAnuncios.setAttribute('aria-live', 'polite');
  regionAnuncios.className = 'sr-only';
  document.body.appendChild(regionAnuncios);

  // Función para anunciar cambios en voz alta a usuarios de tecnologías asistivas
  function anunciarLector(mensaje) {
    regionAnuncios.textContent = '';
    setTimeout(() => {
      regionAnuncios.textContent = mensaje;
    }, 100);
  }

  // 2. COTIZADOR DINÁMICO EN TIEMPO REAL (Interacción Temática)
  if (selectCabana) {
    const cajaEstimador = document.createElement('div');
    cajaEstimador.className = 'cotizador-box';
    cajaEstimador.innerHTML = `
      <p aria-live="polite">
        <strong>🌲 Tarifa Estimada:</strong> 
        <span id="precio-estimado">Selecciona una opción para calcular</span>
      </p>
    `;
    selectCabana.parentNode.insertBefore(cajaEstimador, selectCabana.nextSibling);

    selectCabana.addEventListener('change', (e) => {
      const opcion = e.target.value.toLowerCase();
      let tarifa = 0;

      if (opcion.includes('villarrica') || opcion.includes('lago')) {
        tarifa = 65000;
      } else if (opcion.includes('curacautin') || opcion.includes('bosque')) {
        tarifa = 75000;
      } else if (e.target.value !== '') {
        tarifa = 55000;
      }

      const txtPrecio = document.getElementById('precio-estimado');

      if (tarifa > 0) {
        const formatoCLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(tarifa);
        txtPrecio.textContent = `${formatoCLP} por noche`;
        anunciarLector(`Tarifa estimada actualizada a ${formatoCLP} por noche.`);
      } else {
        txtPrecio.textContent = 'Selecciona una opción para calcular';
      }
    });
  }

  // 3. VALIDACIÓN ACCESIBLE DEL FORMULARIO DE CONTACTO
  if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();
      limpiarErrores();
      let valido = true;

      // Validar Nombre (mínimo 3 letras)
      if (!inputNombre || inputNombre.value.trim().length < 3) {
        mostrarError(inputNombre, 'Por favor, ingresa tu nombre completo (mínimo 3 caracteres).');
        valido = false;
      }

      // Validar Email (Formato estándar)
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!inputEmail || !regexEmail.test(inputEmail.value.trim())) {
        mostrarError(inputEmail, 'Por favor, ingresa un correo electrónico válido (ejemplo: usuario@dominio.cl).');
        valido = false;
      }

      // Validar Mensaje (mínimo 10 caracteres)
      if (!inputMensaje || inputMensaje.value.trim().length < 10) {
        mostrarError(inputMensaje, 'Tu mensaje debe tener al menos 10 caracteres expresando tu consulta.');
        valido = false;
      }

      // Respuesta según el resultado
      if (valido) {
        mostrarExitoModal('¡Chaltumay! Tu solicitud de contacto ha sido recibida correctamente. Nos comunicaremos contigo en breve.');
        anunciarLector('Formulario enviado con éxito. Gracias por contactar a Cabañas Surval.');
        formContacto.reset();
        const txtPrecio = document.getElementById('precio-estimado');
        if (txtPrecio) txtPrecio.textContent = 'Selecciona una opción para calcular';
      } else {
        anunciarLector('El formulario tiene errores. Revisa los campos resaltados.');
      }
    });
  }

  // Funciones Auxiliares para Manipular Errores y Notificaciones
  function mostrarError(campo, mensaje) {
    if (!campo) return;
    campo.setAttribute('aria-invalid', 'true');

    const idError = `error-${campo.id}`;
    let spanError = document.getElementById(idError);

    if (!spanError) {
      spanError = document.createElement('span');
      spanError.id = idError;
      spanError.className = 'mensaje-error';
      spanError.setAttribute('role', 'alert');
      campo.parentNode.appendChild(spanError);
    }

    spanError.textContent = mensaje;
    campo.setAttribute('aria-describedby', idError);
  }

  function limpiarErrores() {
    document.querySelectorAll('.mensaje-error').forEach(el => el.remove());
    document.querySelectorAll('[aria-invalid="true"]').forEach(campo => {
      campo.removeAttribute('aria-invalid');
      campo.removeAttribute('aria-describedby');
    });
  }

  function mostrarExitoModal(mensajeTexto) {
    const modal = document.createElement('div');
    modal.className = 'notificacion-exito';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Mensaje enviado');

    modal.innerHTML = `
      <div class="notificacion-card">
        <h3>🏔️ Cabañas Surval</h3>
        <p>${mensajeTexto}</p>
        <button id="btn-cerrar-modal" type="button">Aceptar</button>
      </div>
    `;

    document.body.appendChild(modal);

    const btnCerrar = document.getElementById('btn-cerrar-modal');
    btnCerrar.focus();
    btnCerrar.addEventListener('click', () => {
      modal.remove();
    });
  }
});