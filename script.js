document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".yoga-character img");
  const nextPoseButton = document.getElementById("next-pose");
  const autoPoseButton = document.getElementById("auto-pose");
  let currentImageIndex = 0;
  const totalImages = images.length;
  let autoSwitchInterval;

  function showNextImage() {
    images[currentImageIndex].classList.remove("active");
    images[currentImageIndex].classList.add("previous"); // Slide current image to the left

    currentImageIndex = (currentImageIndex + 1) % totalImages;

    images[currentImageIndex].classList.add("active"); // Show next image
    setTimeout(() => {
      images.forEach((img) => img.classList.remove("previous")); // Reset previous image classes
    }, 1000); // Duration of the transition
  }

  function startAutoSwitch() {
    if (autoSwitchInterval) {
      clearInterval(autoSwitchInterval);
    }
    autoSwitchInterval = setInterval(showNextImage, 4000);
  }

  nextPoseButton.addEventListener("click", () => {
    if (autoSwitchInterval) {
      clearInterval(autoSwitchInterval);
      autoSwitchInterval = null;
    }
    showNextImage();
  });

  autoPoseButton.addEventListener("click", startAutoSwitch);

  // Initialize with the first image
  images[currentImageIndex].classList.add("active");
});
