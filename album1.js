const prod = [
    {
        id:0,
        image: 'img/11.jpg',
        title :  'DEMPSEY OF THE SHOULDER DRESS',
        price: 1739500,
    },
    {
        id:1,
        image: 'img/12.jpg',
        title :  'PHOEBE MINI DRESS',
        price: 1739500,
    },
    {
        id:2,
        image: 'img/13.jpg',
        title :  'GERDA PRINCESS DRESS',
        price: 1739500,
    },
    {
        id:3,
        image: 'img/14.jpg',
        title :  'BRIDGET MAXI LENGTH COATS',
        price: 2929500,
    },
    {
        id:4,
        image: 'img/15.jpg',
        title :  'SILAS FLARED PANTS',
        price: 1179500,
    },
    {
        id:5,
        image: 'img/26.jpg',
        title :  'ERICA PENCIL SKIRT',
        price: 1109500,
    },
    {
        id:6,
        image: 'img/17.jpg',
        title :  'AUDREY NOTCHED BLAZER',
        price: 1949500,
    },
    {
        id:7,
        image: 'img/18.jpg',
        title :  'DEMPSEY OF THE SHOULDER DRESS',
        price: 1739500,
    },
    {
        id:8,
        image: 'img/19.jpg',
        title :  'BRIDGET MAXI LENGTH COATS',
        price: 2929500,
    }
];

const categories = [...new Set(prod.map((item) => {return item}))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return (
        `<div class ='box'>
            <div class ='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p class='title'>${title}</p>
                <h2 class='price'>$ ${price}.00</h2>`+
                "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>"+
            `
            </div>
        </div>`
    )
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1)
    displaycart();
}
function displaycart() { // Sửa tên hàm thành displaycart()
    let j = 0, total=0;
    document.getElementById("count").innerHTML= cart.length;
    document.getElementById("total").innerHTML="$"+0+".00";
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML="$" +total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size: 12px; font-weight: bold;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i> </div>"
            );
        }).join('');
    }
}
// Bổ sung vào cuối file cart.js
document.querySelector('.cart').addEventListener('mouseenter', function() {
    document.querySelector('.sidebar').style.display = 'block'; // Hiển thị giỏ hàng khi hover vào biểu tượng giỏ hàng
});

document.querySelector('.sidebar').addEventListener('mouseleave', function() {
    document.querySelector('.sidebar').style.display = 'none'; // Ẩn giỏ hàng khi di chuột ra khỏi giỏ hàng
});