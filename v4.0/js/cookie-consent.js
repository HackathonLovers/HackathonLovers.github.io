/**
 * Panel de Cookies y Google Analytics - Hackathon Lovers
 */

(function() {
  const GA_MEASUREMENT_ID = 'G-JGY0X3EFC1'; // Reemplazar con el ID real de Google Analytics
  const CONSENT_KEY = 'hl_cookie_consent';

  function loadGoogleAnalytics() {
    // Evitar cargar el script si ya existe
    if (document.getElementById('ga-script')) return;

    // Script de Google Tag Manager
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configuración de gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }

  function renderCookieBanner() {
    const bannerHTML = `
      <div id="cookie-consent-banner">
        <div class="cookie-text">
          Utilizamos cookies propias y de terceros, como Google Analytics, para obtener estadísticas de visitas y entender cómo interactúas con nuestra web. Puedes aceptar o rechazar su uso.
        </div>
        <div class="cookie-buttons">
          <button id="btn-reject-cookies" class="cookie-btn cookie-btn-reject">Rechazar</button>
          <button id="btn-accept-cookies" class="cookie-btn cookie-btn-accept">Aceptar cookies</button>
        </div>
      </div>
    `;
    
    // Inyectar el banner al final del body
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    const banner = document.getElementById('cookie-consent-banner');
    
    // Animar la entrada
    setTimeout(() => {
      banner.classList.add('show');
    }, 100);

    // Event Listeners
    document.getElementById('btn-accept-cookies').addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      banner.classList.remove('show');
      loadGoogleAnalytics();
      setTimeout(() => banner.remove(), 300); // Eliminar del DOM después de animar
    });

    document.getElementById('btn-reject-cookies').addEventListener('click', () => {
      localStorage.setItem(CONSENT_KEY, 'rejected');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 300);
    });
  }

  // Comprobar estado de consentimiento al cargar
  document.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (!consent) {
      // Si no hay respuesta previa, mostrar el banner
      renderCookieBanner();
    }
  });

})();
