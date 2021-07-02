// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Get the modal
var newModal = document.getElementById("myNewModal");

// Get the button that opens the modal
var newBtn = document.getElementById("myNewBtn");

// Get the <span> element that closes the modal
var newSpan = document.getElementsByClassName("newClose")[0];

// When the user clicks on the button, open the modal
newBtn.onclick = function() {
  newModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
newSpan.onclick = function() {
  newModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(newEvent) {
  if (newEvent.target == modal) {
    newModal.style.display = "none";
  }
}







// var newModal = document.getElementById("myNewModal");
// var newBtn = document.getElementById("myNewBtn");
// var newSpan = document.getElementsByClassName("newClose")[0];

// newBtn.onclick = function() {
//   newModal.style.display = "block";
// }

// newSpan.onclick = function() {
//   newModal.style.display = "none";
// }

// window.onclick = function(some) {
//   if (some.target == newModal){
//   newModal.style.display = "none";
//   }
// }




