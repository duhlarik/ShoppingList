    //**********************************************************************************
    //   ***   Shopping Cart Funtions   ***

    var item = ["Shoes", "Blouse", "Slacks", "Jacket", "Purse", "Earrings", "Necklace"];
    var price = [75.00, 45.00, 90.00, 120.00, 60.00, 35.00, 40.00];

    for (var i = 0; i < item.length; i++) {
        console.log(item[i], "\t$" + price[i] + ".00");
    };

    for (var key in item) {
        console.log(item[key] + "\t$" + price[key] + ".00");
    };

    var cart = [];

    function quantity() {
        var quantity = prompt('Please enter the quantity.');
        return quantity;
    }

    var Item = function(item, price, quantity) {
        this.item = item
        this.price = price
        this.quantity = quantity
    };

    function pushToCart(item, price, quantity) {
        for (var i in cart) {
            if (cart[i].item === item) {
                cart[i].quantity += quantity;
                return;
            }
        }
        var cartItem = new Item(item, price, quantity);
        cart.push[cartItem];
    }

    function displayCart() {
        var cart = listCart();
        var output = "";
        for (var i in cart) {
            output += "<li>" + cart[i].item + " quantity: " + cart[i].quantity + " " + cart[i].price + "</li>"
        }
        $("#show-cart").html(output);
        $("#total-cart").html(totalCost());
    }

    function removeOneItemFromCart(item, price, quantity) {
        for (var i in cart) {
            if (cart[i].item === item) {
                cart[i].quantity--;
                if (cart[i].quantity === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
    }

    function removeAllOfThatItemFromCart(item) {
        for (var i in cart) {
            if (cart[i].item === item) {
                cart.splice(i, 1);
                break;
            }
        }
    }

    function clearCart() {
        cart = []
    }

    function extendedPrice() {
        var extendedPrice = 0;
        for (var i in cart) {
            extendedPrice = cart[i].price * cart[i].quantity;
        }
    }

    function countCart() {
        var totalItems = 0;
        for (var i in cart) {
            totalItems += cart[i].count;
        }
        return totalItems;
    }

    function totalCost() {
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost;
    }

    function listCart() {
        var cartCopy = []
        for (var i in cart) {
            var itemInCart = cart[i];
            var itemCopy = {};
            for (var p in itemInCart) {
                itemCopy[p] = itemInCart[p];
            }
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    }


    /* Read 

    https://css-tricks.com/use-button-element/

    * [Document.createElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
    * [Node.appendChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
    * [When to use the Button Element - CSS Tricks](https://css-tricks.com/use-button-element/)
    */

    /*	<script>
        <button onclick = pushToCart();>Add Item</button>
        </script>

        <script>
        myButton = document.createElement("input");
        myButton.type = "button";
        myButton.value = "Add Item";
        placeHolder = document.getElementById("button");
        placeHolder.appendChild(myButton);
        </script>

        <a class="add-to-cart" href="#" data-item="Shoes" data-price="75.00" data-quantity="quantity"></a>
        <a class="add-to-cart" href="#" data-item="Blouse" data-price="45.00"></a>
        <a class="add-to-cart" href="#" data-item="Slacks" data-price="90.00"></a>
        <a class="add-to-cart" href="#" data-item="Jacket" data-price="120.00"></a>
        <a class="add-to-cart" href="#" data-item="Purse" data-price="60.00"></a>
        <a class="add-to-cart" href="#" data-item="Earrings" data-price="35.00"></a>
        <a class="add-to-cart" href="#" data-item="Necklace" data-price="40.00"></a>*/
