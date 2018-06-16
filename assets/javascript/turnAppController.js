document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('furna')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('furna')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })

    document.getElementsByClassName('kotlon')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('kotlon')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })

    document.getElementsByClassName('aspirator')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('aspirator')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })

    document.getElementsByClassName('kana')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('kana')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })

    document.getElementsByClassName('toster')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('toster')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })
    document.getElementsByClassName('friturnik')[0].addEventListener('click', function () {
        var content = document.getElementsByClassName('friturnik')[1].innerHTML;
        document.getElementById('settings').innerHTML = content;
    })

})