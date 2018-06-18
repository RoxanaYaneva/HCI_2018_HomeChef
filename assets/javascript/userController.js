$(function(){
    var user = JSON.parse(sessionStorage.getItem('loggedUser'));

if(user){
    var favorites = user.favorites;
    var myrecipes = user.myrecipes;
    user.registered= formatDate(user.registered);
    var userTemplate = $('#userTemplate').text();
    var userPage = Handlebars.compile(userTemplate);
    userPage = userPage({ user: user });
    $('div.left').html(userPage);
}



});


function formatDate(date){
    var registered = new Date(date);
    var dd = registered.getDate();
    var mm = registered.getMonth()+1;
    
    var yyyy = registered.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var registered = dd+'.'+mm+'.'+yyyy;
    return registered;
}