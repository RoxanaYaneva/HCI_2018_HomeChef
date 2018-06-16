$(function () {
    var products = [];
    $.get('http://localhost/HCI_2018_HomeChef/products.json').then(function (prod) {
        products = JSON.parse(prod);
        for (var i = 0; i < products.length; i++) {
            var option = $(`<option value="${products[i].name}">`);
            $('#productsList').append(option);
        }

        $('#calculate').on('click', function (e) {
            e.preventDefault();
            var name = $('#product').val();
            var quantity = $('#quantity').val();

            if (name != '' && quantity != '') {
                var product = products.find(prod => prod.name === name);
                var calories = product.calories * (quantity / 100);
                $("#result").html("Калории за " + quantity + " гр. " + name + " : <span id='cal'>" + calories + "</span> kcal");
                $("#result").show();
                $("#hidden").hide();
                $('#product').val('');
                $('#quantity').val('');
            } else {
                $("#hidden").show();
                $("#result").hide();
            }
        });
    });

})