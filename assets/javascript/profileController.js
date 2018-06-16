document.addEventListener("DOMContentLoaded", function(){

    var content = document.getElementsByClassName('personalInfo')[1].innerHTML;
    document.getElementById('content').innerHTML = content;

    document.getElementsByClassName('rating')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('rating')[1].innerHTML;
        document.getElementById('content').innerHTML = content;
    })
    
    document.getElementsByClassName('favourites')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('favourites')[1].innerHTML;
        document.getElementById('content').innerHTML = content;
    })
    
    document.getElementsByClassName('personalInfo')[0].addEventListener('click', function () {
        document.getElementById('content').innerHTML = content;
    })
    
    
    document.getElementsByClassName('competitions')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('competitions')[1].innerHTML;
        document.getElementById('content').innerHTML = content;
    })
})


