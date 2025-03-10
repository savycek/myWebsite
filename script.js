document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("homeButton");

    button.addEventListener("mouseenter", function () {
        button.textContent = "...country roads!";
    });

    button.addEventListener("mouseleave", function () {
        button.textContent = "Take me home";
    });
});
