$(function(){

    $("#register").on("click", function(){
        event.preventDefault();
        if($("#username").val() && $("#passwd").val() && $("#email").val()){
            $("p").show();
        }

        $("#username").val('');
        $("#passwd").val('');
        $("#email").val('');

        setInterval(function(){ location.replace("login.html")}, 1500);
    })
   
})