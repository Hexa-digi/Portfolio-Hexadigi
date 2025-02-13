document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const images = document.querySelectorAll(".carousel-container img");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  if (!carouselContainer || images.length === 0 || !prevButton || !nextButton) {
    console.error("Carousel elements not found!");
    return;
  }

  let index = 0;
  let imageWidth = images[0].offsetWidth; // Utiliser offsetWidth pour éviter 0

  function updateCarousel() {
    carouselContainer.style.transition = "transform 0.5s ease-in-out";
    carouselContainer.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  function updateImageWidth() {
    imageWidth = images[0].offsetWidth; // Mettre à jour la largeur de l'image si la fenêtre change
    updateCarousel();
  }

  prevButton.addEventListener("click", function () {
    index = index > 0 ? index - 1 : images.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    index = index < images.length - 1 ? index + 1 : 0;
    updateCarousel();
  });

  window.addEventListener("resize", updateImageWidth); // Mettre à jour sur redimensionnement

  updateCarousel(); // S'assurer que l'affichage commence correctement
});
