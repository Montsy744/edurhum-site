let value = 0;
function switchTeam() {
  value += 1;

  const inputs = document.querySelectorAll(".carrousselNE input");

  if (value >= inputs.length) {
    value = 0;
  }

  inputs.forEach((e) => (e.checked = false));
  inputs[value].checked = true;
  launchload();
}

function backTeam() {
  value -= 1;

  const inputs = document.querySelectorAll(".carrousselNE input");

  if (value < 0) {
    value = inputs.length - 1;
  }

  inputs.forEach((e) => (e.checked = false));
  inputs[value].checked = true;
  launchload();
}

function launchload() {
  const inputs = document.querySelectorAll(".carrousselNE input");
  document.getElementById("loader").style.width =
    (value / (inputs.length - 1)) * 100 + "%";
}
