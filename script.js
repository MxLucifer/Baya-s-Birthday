document.getElementById("clickMeBtn").addEventListener("click", function() {
    var video = document.getElementById("birthdayVideo");

    // Hide "Click Me" button and display cake container
    this.style.display = "none";
    document.getElementById("cakeContainer").style.display = "block";

    // Play video
    video.play();
});

document.getElementById("readMeBtn").addEventListener("click", function() {
    window.location.href = "images.html";
});

