// Get modal element
var modal = document.getElementById('contactModal');

// Get close button
var closeBtn = document.getElementsByClassName('close-btn')[0];

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal when page loads
window.onload = function() {
    openModal();
}

// Function to open modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
