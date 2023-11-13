let allBtn = document.querySelectorAll('button');

class UI{
    
    static addToCart(e){

        let price =  e.previousElementSibling;
        let product = e.previousElementSibling.previousElementSibling;

        let li = document.createElement('li');
        li.className = 'cart';

        li.appendChild(document.createTextNode(product.textContent + " , "));
        li.appendChild(document.createTextNode('Price : ' + price.textContent + " "));

        let btn = document.createElement('button');
        btn.id = e.id;
        btn.innerHTML = 'remove';
        li.appendChild(btn);

        let ol = document.querySelector('ol');
        console.log(ol);

        ol.appendChild(li);
    }

    static removeFromCart(btn){

        console.log(btn.parentElement);
        let par = btn.parentElement;
        par.remove();
    }
}

allBtn.forEach((item) => {

    item.addEventListener('click', fun);

    function fun(e){

        UI.addToCart(e.target);
    }
});

let ol = document.querySelector('#add-to-cart');
ol.addEventListener('click', cartList);

function cartList(e){

    UI.removeFromCart(e.target);
}