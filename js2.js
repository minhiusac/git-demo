function valEmail(email){
    const val = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return val.test(String(email).toLowerCase());
}
function valForm(){
    var us = document.getElementById("us").value;
    var mail = document.getElementById("mail").value;
    var pa = document.getElementById("pa").value;
     
    if(us===null){
        alert("Không để trống tài khoản")
    }
     else if(mail===""){
        alert("Không để trống email")
    }
    else if( !valEmail(mail)){
        alert("Email không hợp lệ")
    }
   else if(pa ===""){
        alert("Không để trống mật khẩu")
    }
}
