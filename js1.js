function logg(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    if(user ==='admin' && pass==='123'){
        alert("Đăng nhập thành công");
        window.location="index.html"
    }else{
        alert("Đăng nhập thất bại")
    }
}