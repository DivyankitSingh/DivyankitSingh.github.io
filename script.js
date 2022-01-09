var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// function validateForm() {
//   if (document.forms["contactform"]["enable"].checked)
//       alert("Thanks for filling this form, our expert will contact you soon!");
// }




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



