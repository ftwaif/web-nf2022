function login(){
    event.preventDefault();


    let uname = document.getElementById("username").value;
    let pas = document.getElementById("password").value;

    if (uname == "ahmad2017" && pas == "intergrity"){
        location.replace("sukses.html");
        alert("Login berhasil");
    }else {
alert ("Login Gagal")
    }
}