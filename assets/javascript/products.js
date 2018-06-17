$(function () {
    var products = [{
        name:"домат",
        calories: "17"
    },
    {
        name:"краставица",
        calories: "10"
    },
    {
        name:"банан",
        calories: "95"
    },
    {
        name:"яйце",
        calories: "84"
    },
    {
        name:"сьомга",
        calories: "182"
    },
    {
        name:"риба тон",
        calories: "91"
    },
    {
        name:"карфиол",
        calories: "34"
    },
    {
        name:"зеле",
        calories: "24"
    },
    {
        name:"кашкавал",
        calories: "330"
    },
    {
        name:"сирене",
        calories: "300"
    },
    {
        name:"морков",
        calories: "41"
    },
    {
        name:"диня",
        calories: "31"
    },
    {
        name:"зелен боб",
        calories: "31"
    },
    {
        name:"леща",
        calories: "105"
    },
 
    {
        name:"нахут",
        calories: "89"
    },
    {
        name:"кисело мляко",
        calories: "42"
    },
    {
        name:"прясно мляко",
        calories: "60"
    },
    {
        name:"чушки",
        calories: "20"
    },
    {
        name:"шоколад",
        calories: ""
    },
    {
        name:"паскови",
        calories: "33"
    },
    {
        name:"спанак",
        calories: "7"
    }   ];
  

        for (var i = 0; i < products.length; i++) {
            var option = $(`<option value="${products[i].name}">`);
            $('#productsList').append(option);
        }

        $('#calculate').on('click', function (e) {
            e.preventDefault();
            var name = $('#product').val();
            var quantity = $('#quantity').val();

            if (name != '' && quantity != '' && !isNaN(Number(quantity))) {
                var product = products.find(prod => prod.name === name);
                var calories = product.calories * (quantity / 100);
                $("#result").html("Калории за " + quantity + " гр. " + name + " : <span id='cal'>" + calories.toFixed(2) + "</span> kcal");
                $("#result").show();
                $("#hidden").hide();
                $('#product').val('');
                $('#quantity').val('');
            } else {
                $("#hidden").show();
                $("#result").hide();
            }
        });

})