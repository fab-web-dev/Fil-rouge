document.addEventListener("DOMContentLoaded", function() {
    const mainButton = document.getElementById("mainButton");
    mainButton.addEventListener("click", function() {
        const mainVideo = document.getElementById("mainVideo");
        mainVideo.classList.add("main-hide");
        document.body.classList.remove("no-scroll");
        scrollTo(0,0);
    });
});