$(function(){
    $("#login").on("click", function(){
        sessionStorage.setItem("loggedUser", true);
    })

    $("#guest").on("click", function(){
        sessionStorage.clear();
        location.replace("filterDesktop.html");  
    })

    $(".logout").on("click", function(){
        sessionStorage.clear();
    })

    if(sessionStorage.getItem("loggedUser")){
        document.querySelectorAll(".guest").forEach(g => {
            g.style.display = "none";
        });

        document.querySelectorAll(".logged").forEach(g => {
            g.style.display = "inline-block";
        });
    }else{
        document.querySelectorAll(".guest").forEach(g => {
            g.style.display = "inline-block";
        });

        document.querySelectorAll(".logged").forEach(g => {
            g.style.display = "none";
        });

        $(".comments").hide();
    }
})