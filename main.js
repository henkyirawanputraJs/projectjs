// Mengubah warna latar belakang tombol Register setiap kali diklik
var registerButton = document.querySelector('.register-btn');

registerButton.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Menambahkan efek animasi ketika mouse hover pada kotak gambar
var imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach(function (box) {
    box.addEventListener('mouseover', function () {
        box.style.transform = 'scale(1.1)';
    });

    box.addEventListener('mouseout', function () {
        box.style.transform = 'scale(1)';
    });
});

/*Animasi Slide Home*/ 
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

/*Smooth Scrooll*/ 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
