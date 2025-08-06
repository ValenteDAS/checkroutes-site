// scripts.js — extraído de los <script> al final del <body>

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Gracias! Te contactaremos pronto para programar tu demo.');
});

// Button click handlers
document.querySelectorAll('button').forEach(button => {
  if (!button.type || button.type !== 'submit') {
    button.addEventListener('click', () => {
      alert('¡Redirigiendo a la página de registro!');
    });
  }
});

// Cloudflare anti-bot script (tal cual estaba)
(function(){
  function c(){
    var b = a.contentDocument||a.contentWindow.document;
    if (b){
      var d = b.createElement('script');
      d.innerHTML = "window.__CF$cv$params={r:'96aec7edd68bb2aa',t:'MTc1NDQ4NTg5NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName('head')[0].appendChild(d);
    }
  }
  if (document.body){
    var a = document.createElement('iframe');
    a.height=1; a.width=1;
    a.style.position='absolute'; a.style.top=0; a.style.left=0;
    a.style.border='none'; a.style.visibility='hidden';
    document.body.appendChild(a);
    if (document.readyState !== 'loading') c();
    else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
    else {
      var e = document.onreadystatechange || function(){};
      document.onreadystatechange = function(b){
        e(b);
        if (document.readyState !== 'loading'){
          document.onreadystatechange = e;
          c();
        }
      };
    }
  }
})();