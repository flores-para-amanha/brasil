function c_img_dsc(){
    const now = new Date();
    const hour = now.getHours();

    let img, desc, bgcolor, desccolor;

    if (hour >= 6 && hour < 18) {
        img = "img/bancoD.png";
        desc = "AM";
    }

    else {
        img = "img/bancoN.png";
        desc = "PM";
        bgcolor = "black";
        desccolor = "white";
    }

    document.getElementById("img").src = img;
    document.getElementById("desc").innerHTML = desc;
    document.body.style.backgroundColor = bgcolor;
    document.getElementById("desc").style.color = desccolor;
}

c_img_dsc();