var modal = document.getElementById('images-modal-container');
var modalImg = document.getElementById("modal-image");
var overlay = document.querySelector('.modal-container');

function showImage(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}
  
function closeModal() {
    modal.style.display = "none";
}

overlay.onclick = function(event) {
    if (event.target === overlay) {
        closeModal();
    }
};

document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
        closeModal();
    }
};
