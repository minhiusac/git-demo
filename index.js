// const prod = [
//     {
//         id:0,
//         image: 'img/1.jpg',
//         title :  'DEMPSEY OF THE SHOULDER DRESS',
//         price: 1739500,
//     },
//     {
//         id:1,
//         image: 'img/2.jpg',
//         title :  'Ảnh 2',
//         price: 1200000,
//     },
//     {
//         id:2,
//         image: 'img/3.jpg',
//         title :  'Ảnh 3',
//         price: 1200000,
//     },
//     {
//         id:3,
//         image: 'img/1.jpg',
//         title :  'Ảnh 1',
//         price: 1200000,
//     },
//     {
//         id:4,
//         image: 'img/2.jpg',
//         title :  'Ảnh 2',
//         price: 1200000,
//     },
//     {
//         id:5,
//         image: 'img/3.jpg',
//         title :  'Ảnh 3',
//         price: 1200000,
//     },
//     {
//         id:6,
//         image: 'img/1.jpg',
//         title :  'Ảnh 1',
//         price: 1200000,
//     },
//     {
//         id:7,
//         image: 'img/2.jpg',
//         title :  'Ảnh 2',
//         price: 1200000,
//     },
//     {
//         id:8,
//         image: 'img/3.jpg',
//         title :  'Ảnh 3',
//         price: 1200000,
//     }
// ];

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
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
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
                    <p style='font-size: 12px;'>${title}</p>
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