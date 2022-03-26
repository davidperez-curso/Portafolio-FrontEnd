
//console.log('script vinculado')
//funciones de iconos palpitantes
function moverPerfil() {
    const iconA = document.querySelector(".iconA");
    iconA.setAttribute("class", "iconA fa-solid fa-address-card fa-2x fa-beat");
    //console.log(iconA.className);
};
function quitarPerfil() {
    const iconA2 = document.querySelector(".iconA");
    iconA2.setAttribute("class", "iconA fa-solid fa-address-card fa-2x");
    //console.log(iconA2.className);
};
function moverLink() {
    const iconB = document.querySelector(".iconB");
    iconB.setAttribute("class", "iconB fa-brands fa-linkedin fa-2x fa-beat");
    //console.log(iconB.className);
};
function quitarLink() {
    const iconB2 = document.querySelector(".iconB");
    iconB2.setAttribute("class", "iconB fa-brands fa-linkedin fa-2x");
    //console.log(iconB2.className);
};
function moverMail() {
    const iconC = document.querySelector(".iconC");
    iconC.setAttribute("class", "iconC fa-solid fa-envelope fa-2x fa-beat");
    //console.log(iconC.className);
};
function quitarMail() {
    const iconC2 = document.querySelector(".iconC");
    iconC2.setAttribute("class", "iconC fa-solid fa-envelope fa-2x");
    //console.log(iconC2.className);
};
function moverBack() {
    const iconD = document.querySelector(".iconD");
    iconD.setAttribute("class", "iconD fa-solid fa-circle-chevron-left fa-4x fa-beat");
};
function quitarBack() {
    const iconD2 = document.querySelector(".iconD");
    iconD2.setAttribute("class", "iconD fa-solid fa-circle-chevron-left fa-4x");
};
function moverBackB() {
    const iconE = document.querySelector(".iconE");
    iconE.setAttribute("class", "iconE fa-solid fa-circle-chevron-left fa-3x fa-beat");
};
function quitarBackB() {
    const iconE2 = document.querySelector(".iconE");
    iconE2.setAttribute("class", "iconE fa-solid fa-circle-chevron-left fa-3x");
};
function moverBackF() {
    const iconF = document.querySelector(".iconF");
    iconF.setAttribute("class", "iconF fa-solid fa-circle-chevron-left fa-4x fa-beat");
};
function quitarBackF() {
    const iconF2 = document.querySelector(".iconF");
    iconF2.setAttribute("class", "iconF fa-solid fa-circle-chevron-left fa-4x");
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const menuBack = document.querySelector(".menuBack");
const menuHome = document.querySelector(".menuHome");

function moverPrev() {
    prev.setAttribute("class", "prev fa-solid fa-angles-left fa-2x fa-beat");
};
function quitarPrev() {
    prev.setAttribute("class", "prev fa-solid fa-angles-left fa-2x");
};
function moverNext() {
    next.setAttribute("class", "next fa-solid fa-angles-right fa-2x fa-beat");
};
function quitarNext() {
    next.setAttribute("class", "next fa-solid fa-angles-right fa-2x");
};
function moverMenuBack() {
    menuBack.setAttribute("class", "menuBack fa-solid fa-circle-chevron-left fa-3x fa-beat");
};
function quitarMenuBack() {
    menuBack.setAttribute("class", "menuBack fa-solid fa-circle-chevron-left fa-3x");
};
function moverMenuHome() {
    menuHome.setAttribute("class", "menuHome fa-solid fa-house fa-3x fa-beat")
};
function quitarMenuHome() {
    menuHome.setAttribute("class", "menuHome fa-solid fa-house fa-3x")
};

/* ESCONDER CONTAINERS */
//Mostrar - esconder container ghost
const div = document.querySelector(".ghost-container");
function showDiv() {
    div.style.display = 'flex';
    div.setAttribute("class", "ghost-container animate__animated animate__fadeIn");
};
//función asíncrona, primero se ejecuta setAttribute para la clase que da el efecto de fadeOut, luego en otra función se espera que esta se ejecute para luego
//llamar a la siguiente función 1 segundo despues para esconder el div con display: none
function testAsync() {
    return new Promise((resolve, reject) => {
        div.setAttribute("class", "ghost-container animate__animated animate__fadeOut");
        resolve();
    });
};
async function hideDiv() {
    console.log("caller");
    await testAsync();
    setTimeout(() => {
        div.style.display = 'none';
    }, 1000);
};

// esconder container android
const Adiv = document.querySelector(".android-container");
function showAndroid() {
    Adiv.style.display = "flex";
    Adiv.setAttribute("class", "android-container animate__animated animate__fadeIn");
};
function androidAsync() {
    return new Promise((resolve, reject) => {
        Adiv.setAttribute("class", "android-container animate__animated animate__fadeOut");
        resolve();
    });
};
async function hideAndroid() {
    await androidAsync();
    setTimeout(() => {
        Adiv.style.display = 'none';
    }, 1000);
};

//esconder slide
const slideCont = document.querySelector(".slideshow-container");
function showSlideAsync() {
    return new Promise((resolve,reject)=>{
        Adiv.setAttribute("class", "android-container animate__animated animate__fadeOut");
        slideCont.setAttribute("class", "slideshow-container animate__animated animate__fadeIn");
        resolve();
    })
}

async function showSlide() {
    await showSlideAsync();

    setTimeout(() => {
        slideCont.style.display = "flex";
        Adiv.style.display = 'none';
        
    }, 1000);
    
    
    
};
function slideAsync() {
    return new Promise((resolve, reject) => {
        Adiv.style.display = "none";
        slideCont.setAttribute("class", "slideshow-container animate__animated animate__fadeOut");
        resolve();
    })
};
async function hideSlide() {
    await slideAsync();
    setTimeout(() => {
        slideCont.style.display = "none"
    }, 1000);
};
// volver a android-container
function slideBackAsync() {
    return new Promise((resolve, reject) => {
        slideCont.setAttribute("class", "slideshow-container animate__animated animate__fadeOut");
        Adiv.setAttribute("class", "android-container animate__animated animate__fadeIn");
        resolve();
    })
};
async function hideBackSlide() {
    await slideBackAsync();
    setTimeout(() => {
        slideCont.style.display = "none";
        Adiv.style.display = "flex";
    }, 1000);
};
//esconder About me
const aboutCont = document.querySelector(".aboutme-container");
function showAbout() {
    aboutCont.style.display = "grid";
    aboutCont.setAttribute("class", "aboutme-container animate__animated animate__fadeIn");
}
function aboutAsync() {
    return new Promise((resolve, reject) => {
        aboutCont.setAttribute("class", "aboutme-container animate__animated animate__fadeOut");
        resolve();
    })
};
async function hideAbout() {
    await aboutAsync();
    setTimeout(() => {
        aboutCont.style.display = "none"
    }, 1000);
}

/* funciones slide */

let slideIndex = 1;
showSlides(slideIndex);

// control siguiente/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
};

// control dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//función principal
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].setAttribute("class", "active dot fa-regular fa-circle-dot")
}





