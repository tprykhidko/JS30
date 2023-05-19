function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
  
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }
  
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
  
  window.addEventListener("keydown", playSound);