let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #b56dd1;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#b56dd1;">Estoy aprendiendo programacion web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
