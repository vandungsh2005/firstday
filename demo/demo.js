let btnPopUp = document.getElementById('btn-popup');
let modal = document.getElementsByClassName('modal');
let closeBtn = document.getElementById('close')

btnPopUp.addEventListener('click', function() {
  modal[0].style.display = 'block'
})

closeBtn.addEventListener('click', function() {
  modal[0].style.display = 'none'
})

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = 'none'
  }
}