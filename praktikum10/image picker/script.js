function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "gara") {
        images.src = "image/gara.png";
        images.width = 300;
        images.alt = "Ini adalah gambar gara.png";
        alert("Ini adalah gambar gara.png");
    } else if (picker == "hinata") {
        images.src = "image/hinata.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar hinata.jpg";
        alert("Ini adalah gambar hinata.jpg");
    } else if (picker == "kakashi") {
        images.src = "image/kakashi.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar kakashi.jpg";
        alert("Ini adalah gambar kakashi.jpg");
    } else if (picker == "naruto") {
        images.src = "image/naruto.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar naruto.jpg";
        alert("Ini adalah gambar naruto.jpg");
    } else if (picker == "sakura") {
        images.src = "image/sakura.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar sakura.jpg";
        alert("Ini adalah gambar sakura.jpg");
    } else if (picker == "sasuke") {
        images.src = "image/sasuke.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar sasuke.jpg";
        alert("Ini adalah gambar sasuke.jpg");
    } else {
        alert("Gagal");
    }
}