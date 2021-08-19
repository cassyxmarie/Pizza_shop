let totalItems = [];
let pizzaId = 0;

//Specials//
let specialSize = $('input[name=special-size]:checked').val();

$("#specials").hide();
$("#view-specials").click(function() {
    $("#specials").show();
});

let special1 = {
    pizzaId: pizzaId,
    size: specialSize,
    crust: "Thin crust",
    sauce: "Barbeque",
    meat: ["Chicken", "Bacon"],
    veggie: ["Red onions"]
};

let special2 = {
    pizzaId: pizzaId,
    size: specialSize,
    crust: "Hand tossed",
    sauce: "Marinara",
    meat: ["Pepperoni", "Sausage", "Ham"],
    veggie: ["Red onions", "Mushrooms"]
};

let special3 = {
    pizzaId: pizzaId,
    size: specialSize,
    crust: "Hand tossed",
    sauce: "Barbeque",
    meat: ["Ham"],
    veggie: ["Pineapple", "Jalepenos", "Red onions"]
};

let special4 = {
    pizzaId: pizzaId,
    size: specialSize,
    crust: "Thin crust",
    sauce: "Garlic parmesean",
    meat: ["Chicken"],
    veggie: ["Spinach", "Red onion", "Mushrooms", "Black olives"]
};

let customization = '<p>Select a size</p><input type="radio" id="personal" name="special-size" value="personal" checked><label for="personal">Personal</label><input type="radio" id="small" name="special-size" value="small" unchecked><label for="small">Small</label><input type="radio" id="medium" name="special-size" value="medium" unchecked><label for="medium">Medium</label><input type="radio" id="large" name="special-size" value="large" unchecked><label for="large">Large</label><br><input type="checkbox" id="sub-gf" name="sub-gf" value="gluten-free" unchecked><label for="sub-gf">Substitute crust for Gluten-free</label>'

$("#add-special-1").click(function() {
    $("#special-size-1").append(customization).append('<br><button id="custom-1">Add to order</button>');
    $("#custom-1").click(function() {
        pizzaId ++;
        special1.pizzaId = pizzaId;
        if ($('input[name=sub-gf]').is(':checked')) {
            special1.crust = $('input[name=sub-gf]').val()
        };
        totalItems.push(special1);
        console.log(totalItems);
    });
});

$("#add-special-2").click(function() {
    $("#special-size-2").append(customization).append('<br><button id="custom-2">Add to order</button>');
    $("#custom-2").click(function() {
        pizzaId ++;
        special2.pizzaId = pizzaId;
        if ($('input[name=sub-gf]').is(':checked')) {
            special1.crust = $('input[name=sub-gf]').val()
        };
        totalItems.push(special2);
        console.log(totalItems);
    });
});

$("#add-special-3").click(function() {
    $("#special-size-3").append(customization).append('<br><button id="custom-3">Add to order</button>');
    $("#custom-3").click(function() {
        pizzaId ++;
        special3.pizzaId = pizzaId;
        if ($('input[name=sub-gf]').is(':checked')) {
            special1.crust = $('input[name=sub-gf]').val()
        };      
        totalItems.push(special3);
        console.log(totalItems);
    });
});

$("#add-special-4").click(function() {
    $("#special-size-4").append(customization).append('<br><button id="custom-4">Add to order</button>');
    $("#custom-4").click(function() {
    pizzaId ++;
    special4.pizzaId = pizzaId;
    if ($('input[name=sub-gf]').is(':checked')) {
        special1.crust = $('input[name=sub-gf]').val()
    };
    totalItems.push(special4);
    console.log(totalItems);
    });
});

//Custom//
$("#customSelections").hide();
$(".custom-pizza").click(function() {
     $("#customSelections").show();
});

$("#add-custom").click(function() {
    pizzaId ++;
//  pizzaId.push(pizzaQuantity);
 // console.log(pizzaId);
 // console.log(pizzaId);
    let size = $('input[name=size]:checked').val()  
    let crust = $('input[name=crust]:checked').val()
    let sauce = $('input[name=sauce]:checked').val()
    let meat = []; 
    $('input[name=meat]:checked').each(function() {
        meat.push($(this).val());
    }); 
    let veggie = []; 
    $('input[name=veggie]:checked').each(function() {
        veggie.push($(this).val());
    }); 
  
    const customPizza = {
        pizzaId: pizzaId,
        size: size,
        crust: crust,
        sauce: sauce,
        meat: meat,
        veggie: veggie
    };

    // console.log(`Pizza number ` + customPizza.pizzaId + ` is size ` + customPizza.size + `. It has ` + customPizza.crust + ` crust, ` + customPizza.sauce + ` sauce, and ` + customPizza.meat.join(', ') + ` ` + customPizza.veggie.join(', '));
    
    totalItems.push(customPizza);
    console.log(totalItems);


});


//The code below inserts the quantity html into the page
document.querySelector('#quantity');
let html = '<label for="quantity">Quantity</label>';

for ( let i = 1; i <= 10; i++ ) {
    html += `<option class="quantity" value="${i}">${i}</option>`;
}

$('#quantity').append(html);

$("#show-all-items").hide();
$("#view-total").click(function() {
    $("#show-all-items").show();
        console.log(totalItems);
    $("#show-all-items").append(totalItems.each());
});



console.log("I'm at the end of the code");
//main.innerHTML = `<p>Yo whaddup ${toppings}</p>`;









//JavaScript

//const box = document.querySelector('.box');
//box.style.display = 'none';

//jQuery

//(Standard) -- jQuery('.box').hide();
//(Shorthand) -- $('.box').hide();

//JavaScript
//box.addEventListener('click', function(){
//  alert('You clicked me!'); 
//});

//jQuery
//$('.box').click(function(){
//  alert('You clicked me with jQuery');
//});
             

// let product = {
//   name: "Chair",
//   inventory: 10,
//   unit_price: 45.99
// };
// console.log(product);
// function addInventory(prod, quantity) {
//   prod.inventory += quantity;
// }
// 
// addInventory(product, 4);




//copy of working code
//let pizzaQuantity = 1;
//let pizzaId = [];
//function createPizzas(){
//  for (var i = 0; i <= pizzaQuantity; ++i) {

//    pizzaId.push(i);
//  }

//  return pizzaId;
// }

//createPizzas();
//console.log(pizzaId);