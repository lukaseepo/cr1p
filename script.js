var modal = document.getElementById("imageModal");

var modalImg = document.getElementById("modalImage");

var images = document.querySelectorAll('.file img');

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
    disableScroll();
}

function closeModal() {
    modal.style.display = "none";
    enableScroll();
}

images.forEach(function(img) {
    img.onclick = function() {
        openModal(this.src);
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

modal.addEventListener('touchstart', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});