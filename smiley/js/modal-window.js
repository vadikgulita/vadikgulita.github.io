var modal = document.getElementById('myModal');
var modalimg = document.getElementById('my-img-pop-up');
var btn = document.getElementsByClassName('large_img');
var span = document.getElementsByClassName("close")[0];

for (var i=0;i<btn.length; i++) {
	btn[i].onclick = function() {
	  modal.style.display = "block";
	  var attrbtn = this.parentElement.parentElement.parentElement.previousElementSibling.getAttribute('src');
	  modalimg.setAttribute('src', attrbtn);
	}
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}