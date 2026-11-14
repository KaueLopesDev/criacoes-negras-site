/* CRIAÇÕES — interações: reveal suave, contadores, parallax leve, barra de progresso e QR dinâmico */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- QR dinâmico: aponta para o endereço onde o site estiver aberto ---------- */
  var pageUrl = window.location.href.split("#")[0];
  var qrImg = document.getElementById("qrImg");
  var qrUrl = document.getElementById("qrUrl");
  if (qrImg) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=464x464&margin=8&data=" + encodeURIComponent(pageUrl);
    qrImg.alt = "QR Code que abre este site em " + pageUrl;
  }
  if (qrUrl) qrUrl.textContent = pageUrl;

  /* ---------- Reveal on scroll (com stagger no hero) ---------- */
  var heroReveals = document.querySelectorAll(".hero .reveal");
  heroReveals.forEach(function (el, i) { el.style.setProperty("--d", String(i * 110)); el.style.transitionDelay = (i * 110) + "ms"; });

  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Contadores animados ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reduceMotion) { el.textContent = target.toLocaleString("pt-BR"); return; }
    var start = null, dur = 1400;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("pt-BR");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll(".count");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Barra de progresso + parallax leve ---------- */
  var progress = document.getElementById("progress");
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var heroImg = document.getElementById("heroImg");
  if (heroImg) parallaxEls.push(heroImg);
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      if (progress && max > 0) progress.style.width = (window.scrollY / max * 100) + "%";
      if (!reduceMotion) {
        parallaxEls.forEach(function (img) {
          var r = img.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          var delta = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight; /* -0.5..0.5 */
          img.style.transform = "scale(1.08) translateY(" + (delta * -14).toFixed(1) + "px)";
        });
      }
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
