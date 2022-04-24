document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("mainButton")){
        const mainButton = document.getElementById("mainButton");
    mainButton.addEventListener("click", function() {
        const mainVideo = document.getElementById("mainVideo");
        mainVideo.classList.add("main-hide");
        document.body.classList.remove("no-scroll");
        scrollTo(0,0);
    });
    }
    
    if (window.location.href.indexOf("no-intro") !== -1){
        const mainVideo = document.getElementById("mainVideo");
        mainVideo.classList.add("no-transition");
        mainVideo.classList.add("main-hide");
        document.body.classList.remove("no-scroll");
        scrollTo(0,0);
    }

    if (window.location.href.indexOf("contact") !== -1)
    {
        document.body.classList.add('contact-bg');
    }
    else {
        document.body.classList.remove('contact-bg');
    }
});