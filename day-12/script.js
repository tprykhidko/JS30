const pressed = [];
const secretCode = "drapieznik";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("welcome on Polish film!");
    document.querySelector(".ticket").style.opacity = 1;
  }

  console.log(pressed);
});
