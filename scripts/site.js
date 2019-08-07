
function scrollWinToPreliminaryStudies() {
  var d = document.getElementById("preliminaryStudies");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}

function scrollWinToDesignWorks() {
  var d = document.getElementById("designWorks");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}

function projectManagement() {
  var d = document.getElementById("projectManagement");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}

function scrollWinToInstallationSupervision() {
  var d = document.getElementById("installationSupervision");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}

function scrollWinToCommissioning() {
  var d = document.getElementById("commissioning");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}

function scrollWinToEquipmentMaterialSupplies() {
  var d = document.getElementById("equipmentMaterialSupplies");
  let topPos = parseInt(d.offsetTop) - 80;
  window.scrollTo(0, topPos);
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}