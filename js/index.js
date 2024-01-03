'use strict'

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

// Interacción del Logo: ojos que siguen al cursor
// Sigo este tutorial: https://www.youtube.com/watch?v=cwT0oLU8iF4
// El tutorial no está comentando y no entiendo bien que hace
// porque es un código muy avanzado asi que intento desgranarlo
// para entenderlo lo mejor posible y no utilizar el código al tuntún

//Selecciono en el documento las partes del SVG a las que quiero
// aplicar la interacción:
// #face
// #snout
// #firstPupil
// #seconPupil
// #thirdPupil

const face = document.getElementById('face')
const snout = document.getElementById('snout')
const pupil = document.querySelectorAll('.eye__pupil')

console.log(pupil)

// Definimos la posición del cursor en 0 en los ejes xy
// Definimos el width del viewport en px con innerWidth
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
// Definimos el height del viewport en pixeles con innerHeight
// https://developer.mozilla.org/es/docs/Web/API/Window/innerHeight
// Uso let porque los valores van a cambiar
let cursorPosition = {x:0 , y:0}
let viewportWidth = window.innerWidth
let windowHeight = window.innerHeight

// Definimos el tamaño de la ventana con una función
// La función contiene viewportHeight y viewportWidth
function defineScreenSize(){
    viewportHeight = window.innerHeight
    viewportWidth = window.innerWidth
}

// Definimos la posicion actual del cursor en la variable cursorPosition
// X = e.clientX
// Y = e.clientY
// https://www.w3schools.com/jsref/event_clientx.asp
// Llamamos a la función follow para seguir el movimiento del mouse
// *Follow se define más adelante
function pointerMove(e){
    cursorPosition = {x:e.clientX, y:e.clientY}
    follow()
}
// Definimos lookAtCursor con una función
// Sus parámetros son element, xRatio e yRatio
// Element = elementos a trasnformar
// xRatio = distancia entre element y el cursor en eje X
// yRatio = distancia entre el element y el cursor en eje Y

// La posición de element la define get.boundingClientRect
// Que devuelve el tamaño y la posición del elemento en relación al viewport
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

// Calculamos el centro del elemento en el eje X: Ancho del elemento en x + ancho del elemento/2
// Calculamos el centro del elemento en el eje Y: Alto del elemento en y + alto del elemento/2

// Calculamos la distancia entre el cursor y el centro del elemento en ambos ejes
// Redondondeamos: cursorPosition.x - menos centerX * 100 / window.innerWidth
// Redondeamos: cursorPosition.y - menos centerY * 100 / window.innerHeight
// Esto nos da el vamor redondeado del porcentaje del alto y ancho de la ventana

// Aplicamos la transformación al estilo del elemento con translate calculando dos valores:
// la distancia entre el cursor y distanceLeft/xRatio 
// la distancia entre el cursor y distanceTop/yRatio

const lookAtCursor = (element , xRatio, yRatio) =>{
    const elementOffset = element.getBoundingClientRect()
    const centerX = elementOffset.x + elementOffset.width / 2
    const centerY = elementOffset.y + elementOffset.height / 2
    const distanceLeft = Math.round(((cursorPosition.x - centerX)*100)/window.innerWidth)
    const distanceTop = Math.round(((cursorPosition.y - centerY)*100)/window.innerHeight)
    element.style.transform = `translate(${distanceLeft/xRatio}rem, ${distanceTop/yRatio}rem)`
}

// Definimos la posición actual del elemento con la follow (que está en la función mousemove)
// SI el elemento es X lookAtCursor (elemento, valor de xRatio, valor de yRatio)
const follow = function(){
    if(pupil) lookAtCursor(pupil, 2.8, 2.8)
    if(snout) lookAtCursor(snout, 3.2, 3.2)
    if(face) lookAtCursor(face, 2.8, 2.8)
}

// Cuando hago resize en la ventana, activo la función defineScreenSize
// Cuando hago mousemove en la ventana, activo la función mouseMove
window.addEventListener('resize' , defineScreenSize)
window.addEventListener('pointermove', pointerMove)

