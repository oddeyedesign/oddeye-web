'use strict'
// })
// Determino el valor por defecto de translateZ (2rem)
// Cuando hago click en #close dentro de readme
// ADD la clase hidden a readme

//cuando hago click en #close button dentro de exe
// ADD la clase hidden a exe

// const closeReadMe = document.querySelector('#readme .button__close')
// closeReadMe.addEventListener('click' , function(){
//     readme.classList.add('hidden')
// })

// const closeExe = document.querySelector('#exe .button__close')
// closeExe.addEventListener('click' , function(){
//     exe.classList.add('hidden')
// })

// Quiero crear varias interacciones con hero__window:
//  - Animación en hover
//  - Cerrar ventana cuando click en close
//  - Minimizar ventana cuando click en min
//  - Cambiar translateZ cuando click en cada ventana para poner una encima de la otra
// - Drag and drop de las ventanas
//Transformación default de las ventanas
// Seleccionamos TODAS las .hero__window
// Definimos los valores por defecto de translatez, rotateY, SkewY y position (bottom y left)
// Aplicamos los estilos a TODAS las .hero__window
//     const heroWindows = document.querySelectorAll('.hero__window')
//     const readme = document.querySelector('#readme')
//     const exe = document.querySelector('#exe')


//     const front = 10
//     const back = 0
//     const winDefRotY = 30
//     const winDefSkewY = -3
//     const winDefBot = 10
//     const winDefLeft = 5

//    heroWindows.forEach(function (eachWindow , i){
//     heroWindows[i].style.transform = `translateZ(${front}rem) rotateY(${winDefRotY}deg) skewY(${winDefSkewY}deg)`
//     heroWindows[i].style.bottom = `${winDefBot}%`
//     heroWindows[i].style.left = `${winDefLeft}%`
//     exe.style.transform=`translateZ(${back}rem)`
//    })

//     //Hover de las ventanas "efecto 3D"
//     // Definimos los valores de translatez, rotatey y skewy en hover
//     //Cuando mouseover CUALQUIER hero__window aplica la transformación hover
//     // cambiamos los valores default por hover
//     // cuando mouseout
//     // volvemos a poner los valores por defecto
//     const hoverRotY = 0
//     const hoverSkewY = 0

// heroWindows.forEach(function(eachWindow , i){
//     heroWindows[i].addEventListener('mouseover' , function(){
//         heroWindows[i].style.transform = `translateZ(${front}rem) rotateY(${hoverRotY}deg) skewY(${hoverSkewY}deg)`
//     })

//     heroWindows[i].addEventListener('mouseout' , function(){
//         heroWindows[i].style.transform = `translateZ(${front}rem) rotateY(${winDefRotY}deg) skewY(${winDefSkewY}deg)`
//     })
// })

// #readme: cuando hago click se le add clase front, se le remove back y le add back/remove front a exe
// #exe: cuando hago click se le add la clase front, se le remove back y e add back/remove front a readme
// If front: aplicamos la clase hover en mouseover y se la remove en mouseout
// .hero__window: cuando hago click en el bottón close le aplico clase hidden a hero__window
// .window__content: Cuando hago click en min aplico clase hidden a window__content y a min y se la quito a res
// res: cuando hago click se le add la classe hidden de nuevo y se la remove a min

// Selecciono los elementos
const readme = document.getElementById('readme')
const exe = document.getElementById('exe')

console.log(readme)
console.log(exe)

// Cuando hago CLICK en #readme
// REMOVE la clase front a #exe
// ADD la clase back a #exe
// REMOVE la clase back a #readme
// ADD la clase front a #readme
readme.addEventListener('click', function () {
    exe.classList.remove('front')
    exe.classList.add('back')
    readme.classList.remove('back')
    readme.classList.add('front')
})

// Cuando hago MOUSEOVER en #readme
// SI #readme contiene la clase front
// ADD la clase hover a #readme
readme.addEventListener('pointerover', function () {
    if (readme.classList.contains('front')) {
        console.log('readme is front')
        readme.classList.add('hover')
    }
})

// Cuando hago MOUSEOUT en #readme
// SI readme coniene la clase front
// REMOVE la clase hover a #readme
readme.addEventListener('pointerout', function () {
    if (readme.classList.contains('front')) {
        readme.classList.remove('hover')
    }
})

// Cuando hago CLICK en #exe
// REMOVE la clase front a #readme
// ADD la clase back a #readme
// REMOVE la clase back a #exe
// ADD la clase front a #exe
exe.addEventListener('click', function () {
    readme.classList.remove('front')
    readme.classList.add('back')
    exe.classList.remove('back')
    exe.classList.add('front')
})


// Cuando hago MOUSEOVER en #exe
// SI #exe contiene la clase front
// ADD la clase hover a #exe
exe.addEventListener('mouseover', function () {
    if (exe.classList.contains('front')) {
        console.log('exe is front')
        exe.classList.add('hover')
    }
})

// Cuando hago MOUSEOUT en #exe
// SI exe coniene la clase front
// REMOVE la clase hover a #exe
exe.addEventListener('mouseout', function () {
    if (exe.classList.contains('front')) {
        exe.classList.remove('hover')
    }
})


//Cuando hago click en CUALQUIER .button___res
// se le remove la clase hidden a .button__min mismo index
//se le add la clase hidden a .button__res

const heroWin = document.querySelectorAll('.hero__window')
const closeBtn = document.querySelectorAll('.button__close')
const minBtn = document.querySelectorAll('.button__min')
const resBtn = document.querySelectorAll('.button__res')
const winContent = document.querySelectorAll('.window__content')

console.log(heroWin)
console.log(closeBtn)
console.log(minBtn)
console.log(resBtn)

// Cuando hago click a CUALQUIER .button__close
// Selecciono el .hero__window más cercano a ese .button__close (index)
// le ADD la class hidden a .hero__window más cercano
closeBtn.forEach(function (eachClose, i) {
    closeBtn[i].addEventListener('click', function () {
        const closeButtonParent = eachClose.closest('.hero__window')
        closeButtonParent.classList.add('hidden')
    })
})

// Cuando hago click en CUALQUIER .button__min
// Se le add la clase hidden a .button__min MISMO INDEX
// Se le remove la clase hidden a .button__res MISMO INDEX
// Se le add la clase hidden a .window__content MISMO INDEX
minBtn.forEach(function (eachMin, i) {
    minBtn[i].addEventListener('click', function () {
        minBtn[i].classList.add('hidden')
        resBtn[i].classList.remove('hidden')
        winContent[i].classList.add('hidden')
    })
})

//Cuando hago click en CUALQUIER .button__res
// Se le add la clase hidden a .button__res MISMO INDEX
// Se le remove la clase hidden a .button__min MISMO INDEX
// Se le remove la clase hidden a .window__content MISMO INDEX
resBtn.forEach(function (eachRes, i) {
    resBtn[i].addEventListener('click', function(){
    resBtn[i].classList.add('hidden')
    minBtn[i].classList.remove('hidden')
    winContent[i].classList.remove('hidden')
    })
})


// Si exe contiene la clase back
// Y readme contiene la clase hidden
// Remove back de exe
// Add front a exe
// No funciona, revisar si da tiempo
// if(exe.classList.contains('back') || readme.classList.contains('hidden')){
//     exe.classList.remove('back')
//     exe.classList.add('front')
// }

// Si readme contiene la clase back
// Y exe contiene la clase hidden
// Remove back de readme
// Add front a readme
// No funciona, revisar si da tiempo
// if(readme.classList.contains('back') || exe.classList.contains('hidden')){
//     readme.classList.remove('back')
//     readme.classList.add('front')
// }

