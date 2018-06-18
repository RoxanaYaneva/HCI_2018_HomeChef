    $(function () {
        $('#login').on('click', function () {
            event.preventDefault();
            var user = $('#username').val();
            var pass = $('#passwd').val();

            var userId = userStorage.login(user, pass);

            if(user=='' || pass==''){
                $("#loginDiv p").text("Моля, въведете потребителско име и парола!").show(); 
            }
            if (userId) {
                location.replace('account.html');
            } else {
                $("#loginDiv p").show();
                $('#passwd').val('');
                return;
            }
        })


        $('#register').on('click', function (event) {
            event.preventDefault();
            var user = $('#username').val();
            var pass = $('#passwd').val();
            var email = $('#email').val();
            if (userStorage.register(user, pass, email)) {
                console.log(userStorage.register(user, pass, email));
                $("p").show();

                $("#username").val('');
                $("#passwd").val('');
                $("#email").val('');

                setInterval(function(){ location.replace("login.html")}, 1500);

            } else 
                if(user=='' || pass=='' || email==''){
                $("p").text("Моля, попълнете всички полета!").show();
                $("p").css("color", "red");
            }
            else  {
                $("p").text("Това потребителско име вече е заето!").show();
                $("p").css("color", "red");
                $("#username").val('');
                $("#passwd").val('');
                $("#email").val('');
                return;
            }
        })


        $("input").on("input", function(){
            $("p").hide();
        })

    })