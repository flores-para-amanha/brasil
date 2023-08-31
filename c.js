function c_img_dsc(){
    const now = new Date();
    const hour = now.getHours();

    let img, desc, insta, bgcolor, titlecolor, desccolor;

    if (hour >= 6 && hour < 18) {
        img = "img/bancoD.png";
        desc = "AM";
        insta = "img/flowerB.png";
    }

    else {
        img = "img/bancoN.png";
        desc = "PM";
        bgcolor = "black";
        titlecolor = "white";
        desccolor = "white";
        insta = "img/flowerW.png";
    }

    document.getElementById("img").src = img;
    document.getElementById("desc").innerHTML = desc;
    document.body.style.backgroundColor = bgcolor;
    document.getElementById("title").style.color = titlecolor;
    document.getElementById("desc").style.color = desccolor;
    document.getElementById("insta").getElementsByTagName("img")[0].src = insta;
}

c_img_dsc();