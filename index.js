function change() {

    var num1 = Math.round((Math.random() * 5)+1);

    var num2 = Math.round((Math.random() * 5)+1);

    var result = document.querySelector("footer");


    document.querySelector(".img1").setAttribute("src", "./images/dice" +num1+ ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + num2 +".png");

    if (num1 > num2) {
        result.textContent = "Player 1 Won";
    }

    else if (num2 > num1) {
        result.textContent = "Player 2 Won";
    }

    else {
        result.textContent = "Draw";
    }
}

change();
