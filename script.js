window.onload = function() {
    // Animate the box on load
    const box = document.querySelector('.box');
    box.style.animationPlayState = 'running';

    // Show welcome message after 1 second
    setTimeout(function() {
        alert('Welcome to the Super Cool Web Page!');
    }, 1000);
};
