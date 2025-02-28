var btnaPropos = document.getElementById("btnAPropos");
var btnNotreEquipe = document.getElementById("btnNotreEquipe");

var btnhomeNE = document.getElementById("goHomeNE");
var btnhomeAP = document.getElementById("goHomeAP");

var notreEquipe = document.getElementById("Notreequipe");
var apropos = document.getElementById("APropos");

btnhomeNE.addEventListener("click", function () {
  notreEquipe.style.display = "none";
});

btnhomeAP.addEventListener("click", function () {
  apropos.style.display = "none";
});

btnNotreEquipe.addEventListener("click", function () {
  notreEquipe.style.display = "block";
});

btnaPropos.addEventListener("click", function () {
  apropos.style.display = "block";
});

//sigmAntoine
document.querySelector("#sigma").addEventListener("click", function () {
  const image = document.getElementById("animatedImage");

  image.style.display = "block";

  setTimeout(() => {
    image.style.left = "10%";
    image.style.transform = "translate(-50%, -50%) rotate(10deg)";
  }, 10);

  setTimeout(() => {
    image.style.left = "-200%";
    image.style.transform = "translateY(-50%) rotate(0deg)";
  }, 5000);
});
