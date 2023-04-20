const imagesContainer = document.getElementById("moving-images");
const images = imagesContainer.getElementsByTagName("img");

// Get the screen dimensions
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function moveImages() {
  const images = document.querySelectorAll("img");
  const numImages = images.length;

  // Define a range of distances from the center for the images
  const minDistFromCenter = Math.min(screenWidth, screenHeight) * 0.1;
  const maxDistFromCenter = Math.min(screenWidth, screenHeight) * 0.4;

  images.forEach((image) => {
    // Generate a random angle and distance from the center
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (maxDistFromCenter - minDistFromCenter) + minDistFromCenter;

    // Calculate the x and y coordinates of the image based on the angle and distance
    const x = screenWidth / 2 + Math.cos(angle) * distance - image.offsetWidth / 2;
    const y = screenHeight / 2 + Math.sin(angle) * distance - image.offsetHeight / 2;

    // Make sure the image stays within the bounds of the screen
    const maxX = screenWidth - image.offsetWidth;
    const maxY = screenHeight - image.offsetHeight;
    image.style.transform = `translate(${Math.max(0, Math.min(x, maxX))}px, ${Math.max(
      0,
      Math.min(y, maxY)
    )}px)`;
  });
}

moveImages();
setInterval(moveImages, 8000);
