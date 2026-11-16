/* CRIAÇÕES v5 — movimento contido e tipográfico:
   revelar e assentar, progresso em um fio, QR dinâmico */
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

  /* ---------- Revelação por rolagem ---------- */
  var targets = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- A faixa dourada: progresso de leitura ---------- */
  var progress = document.getElementById("progress");
  var ticking = false;
  function onScroll() {
    if (ticking || !progress) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      if (max > 0) progress.style.width = (window.scrollY / max * 100) + "%";
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
