// Debounce function
function debounce(func, wait = 10, immediate = true) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

// Select all slide-in elements
const sliderImages = document.querySelectorAll(".slide-in");

// Check if an element should slide in
function checkSlide() {
  const slideInAt =
    window.scrollY + window.innerHeight - window.innerHeight / 4;

  sliderImages.forEach((slideImage) => {
    const imageBottom = slideImage.offsetTop + slideImage.offsetHeight;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    isHalfShown && isNotScrolledPast
      ? slideImage.classList.add("active")
      : slideImage.classList.remove("active");
  });
}

// Add the event listener with debouncing
window.addEventListener("scroll", debounce(checkSlide));
