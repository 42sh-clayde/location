(function () {
  var localVideo = document.querySelector(".video-frame__el");
  var videoFallback = document.getElementById("video-fallback");
  if (localVideo && videoFallback) {
    localVideo.addEventListener("error", function () {
      videoFallback.hidden = false;
    });
  }

  var galleryButtons = document.querySelectorAll("[data-gallery-open]");
  var lightbox = document.getElementById("lightbox");
  if (!lightbox || !galleryButtons.length) return;

  var lightboxImg = lightbox.querySelector(".lightbox__img");
  var closeBtn = lightbox.querySelector(".lightbox__close");

  function openAt(index) {
    var btn = galleryButtons[index];
    if (!btn) return;
    var img = btn.querySelector("img");
    if (!img) return;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    lightbox.hidden = false;
    document.documentElement.style.overflow = "hidden";
    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.documentElement.style.overflow = "";
  }

  galleryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var i = parseInt(btn.getAttribute("data-gallery-open"), 10);
      openAt(i);
    });
  });

  closeBtn.addEventListener("click", close);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
})();
