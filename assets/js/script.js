
// Kann ich die funktion schon ansprechen, während sich der Slider noch "bewegt"?
function changeBackground() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
  console.log("rot: "+red);
  console.log("grün: "+green);
  console.log("blau: "+blue);

  document.getElementById("background").style.backgroundColor=`rgb(${red},${green},${blue}`
}