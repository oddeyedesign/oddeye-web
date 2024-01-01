'use strict'


// Cuando hago click en #readme
// le remove la clase selected a #exe
// le add la clase selected a #readme

// Cuando hago click en #hero
// le remove la clase selected #readme
// le add la clase selected a #exe

// Si la clase selected == a false
// entonces añadimos style.blur

// Seleccionamos #readme y #exe


// Cuando hago click en #readme...
// readme.addEventListener('click', function(){
//     exe.classList.remove('selected')
//     readme.classList.add('selected')
//     console.log(readme.classList)
// })

// //Cuando hago click en #exe...
// exe.addEventListener('click', function(){
//     readme.classList.remove('selected')
//     exe.classList.add('selected')
//     console.log(readme.classList)
// })


// Quiero que cuando hago click en las ventanas, se ponga por delante la ventana clicada
// La ventana readme.exe ha de estar por delante por defecto

// Determino el valor por defecto de translateZ (2rem)
// Determino el valor de translateZ del elemento delantero (+1rem)
// Determino el valor de translateZ del elemento trasero (-1rem)
// Determino el valor por defecto de translateZ en #readme (3rem)
// Determino el valor por defecto de translateZ en #exe (2rem)
// Aplico los valores por defecto a exe y readme
// Cuando hago click en #readme 
// Aplico el valor translateZ del elemento delantero a readme
// Aplico el valor translateZ del elemento trasero exe
// Cuando hago click en #exe
// Aplico el valor translateZ del elemento delantero exe
// Aplico el valor translateZ del elemento traseto readme

let defaultZ = 2
let readmeDefaultZ = defaultZ + 1 
const sendFront = defaultZ + 1
const sendBack = defaultZ - 1
const readme = document.querySelector('#readme')
const exe = document.querySelector('#exe')
const falseWindow = document.querySelectorAll('.hero__window')
let windowRotateDefault = -20

falseWindow.forEach( function (eachFalseWindow , i){
    falseWindow[i].style.transform = `translateZ(${defaultZ}) rotateY(${windowRotateDefault}deg)`
})

console.log(falseWindow)


// Cuando hago click en #close dentro de readme
// ADD la clase hidden a readme

//cuando hago click en #close button dentro de exe
// ADD la clase hidden a exe

// const closeReadMe = document.querySelector('#readme .buttons__close')
// closeReadMe.addEventListener('click' , function(){
//     readme.classList.add('hidden')
// })

// const closeExe = document.querySelector('#exe .buttons__close')
// closeExe.addEventListener('click' , function(){
//     exe.classList.add('hidden')
// })

