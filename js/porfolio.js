'use strict'

// ---------------Inicio de Responsive Scripts ----------------------------
// Si el ancho de la pantalla es superior a 1000
// ADD la clase invisible a .mobile
// ADD la clase invisible a .social__button
// ADD la clase invisible a .services
// REMOVE la clase hidden a .info
// Esperar .5s
// Add la clase hidden a .mobile
// ADD la clase hidden a .social__button
// ADD la clse hidden a .services
// REMOVE la clase invisible a .info

// Si es inferior o igual a mil
// REMOVE la clase hidden a .mobile
// REMOVE la clase hidden a .social__button
// REMOVE la clase hidden a .services
// ADD la clase invisible a .info
// ADD la clase invisible a .header__wrapper
// Esperar .5s
// REMOVE la clase invisible a .mobile
// REMOVE la clase invisible a .social__button
// REMOVE la clase invisible a .services
// ADD la clase hidden a .info
// ADD la calse hidden a .header__wrapper
// No consigo que funcione, haciendo pruebas...

// Definimos el valor inicial de ancho de la pantalla
// Definimos que la pantalla del modo móvil <= que 1000
// Definimos que la pantalla del modo desktop es > que 1000
let screenWidth = window.innerWidth
let mobileActive = screenWidth <= 1000
let desktopActive = screenWidth > 1000

// Seleccionamos todos los elementos a editar
const mobileWrapper = document.querySelector('.mobile')
const closeMobMenu = document.querySelector('.social__button')
const headerWrapper = document.querySelector('.header__wrapper')

// Definimos la función Desktop mode para agrupar todos los cambios:
// .mobile add hidden
// .social__button add hidden
// .services add hidden
//.info add hidden
// .header__wrapper add hidden
const desktopMode = (function () {
    console.log(screenWidth)
    console.log('Mobile Active?' + mobileActive)
    console.log('Desktop Active?' + desktopActive)
    mobileWrapper.classList.add('invisible')
    closeMobMenu.classList.add('invisible')
    headerWrapper.classList.remove('hidden')

    setTimeout(function () {
        mobileWrapper.classList.add('hidden')
        closeMobMenu.classList.add('hidden')
        headerWrapper.classList.remove('invisible')
    }, 50)
})

// Definimos la función mobile mode para agrupar todos los cambios:
// .mobile remove hidden
// .social__button remove hidden
// .services remove hidden
//.info remove hidden
// .header__wrapper remove hidden
const mobileMode = (function () {
    console.log(screenWidth)
    console.log('Mobile Active?' + mobileActive)
    console.log('Desktop Active?' + desktopActive)

    mobileWrapper.classList.remove('hidden')
    closeMobMenu.classList.remove('hidden')
    headerWrapper.classList.add('invisible')

    setTimeout(function () {
        console.log('Chao')
        mobileWrapper.classList.remove('invisible')
        closeMobMenu.classList.remove('invisible')
        headerWrapper.classList.add('hidden')
    }, 50)

})

// Definimos la función modeSwitch para no tener que repetir todo lo anterior
// Cuando quedamos aplicar los modos móvil/desktop
// Si mobileActive es igual a false
// Comprobamos el valor del ancho de la pantalla de nuevo (sin hacer esto no funciona)
// Comprobamos si se cumplen los requisitos de mobileActive y desktopActive
// llamamos a la función desktopmode
// ELSE llamamos a la función mobilemode
const modeSwitch = (function () {
    screenWidth = window.innerWidth
    mobileActive = screenWidth >= 1000
    if (mobileActive) {
        desktopMode()
    }
    else {
        mobileMode()
    }
})

//Cuando la ventana carga
// Llamamos a la función modeSwitch
window.addEventListener('load', function () {
    modeSwitch()
})

//Cuando la ventana cambia de tamaño
// Llamamos a la función modeswitch
window.addEventListener('resize', function () {
    modeSwitch()
})

// ---------------Fin de Responsive Scripts ----------------------------

// ---------------Inicio Header Scripts ----------------------------
// Cuando hago click en .mobile:
// REMOVE la clase hidden a .header__wrapper
// ADD la clase active a .header
// ADD la clase invisible a .mobile
// Espera .5s
// Add la clase hidden a .mobile
// Remove la clase invisible a .header__wrapper
// A cada .nav__li INDEX:
// Espera .2
// [0] add la clase active
// Espera .4
// [1] add la clase active
// Espera .6
// [2] add la clase active
// Espera .8
// [3] ass la clase active

const mobileMenu = document.querySelector('.mobile')
const header = document.querySelector('.header')
const navLi = document.querySelectorAll('.nav__li')

mobileMenu.addEventListener('click', function () {
    headerWrapper.classList.remove('hidden')
    header.classList.add('active')
    mobileMenu.classList.add('invisible')

    setTimeout(function () {
        mobileMenu.classList.add('hidden')
        headerWrapper.classList.remove('invisible')
        navLi.forEach(function (eachLi, i) {
            setTimeout(function () {
                navLi[0].classList.add('active')
            }, 200)
            setTimeout(function () {
                navLi[1].classList.add('active')
            }, 400)
            setTimeout(function () {
                navLi[2].classList.add('active')
            }, 600)
            setTimeout(function () {
                navLi[3].classList.add('active')
            }, 800)
        }, 500)
    })
})

// Cuando hago click en .social__button
// ADD la clase invisible a .header__wrapper
// REMOVE la clase active a .header
// REMOVE la clase hidden a .mobile
// Espera .5
// REMOVE la clase invisible a .mobile
// ADD la clase hidden a .header__wrapper
// Por cada .nav__li INDEX 
// REMOVE la clase active

closeMobMenu.addEventListener('click', function () {
    headerWrapper.classList.add('invisible')
    header.classList.remove('active')
    mobileMenu.classList.remove('hidden')

    setTimeout(function () {
        mobileMenu.classList.remove('invisible')
        headerWrapper.classList.add('hidden')

        navLi.forEach(function (eachLi, i) {
            navLi[i].classList.remove('active')
        })

    }, 500)
})

// SI el enlace de la web contiene /ES
// ADD la clase hidden a #EN
// SI NO add la clase hidden a ES
// https://www.w3schools.com/howto/howto_js_get_url.asp

const spanishURL = "/es"
const spanishSite = window.location.href.includes(spanishURL)
const spanishLink = document.getElementById('es')
const englishLink = document.getElementById('en')

if (spanishSite) {
    console.log('Web en Castellano')
    englishLink.classList.add('hidden')
}
else {
    console.log(' English site')
    spanishLink.classList.add('hidden')
}

// ---------------Fin de Header Scripts ----------------------------

// ---------------Inicio de Tabs Scripts ---------------------------

// Cuando hago click en CUALQUIER .tabs__li
// REMOVE la clase active a TODOS los tabs__li
// ADD la clase active a tab__li MISMO INDEX
// ADD la clase hidden a todos los .folder
// REMOVE la clase hidden .folder MISMO INDEX
const tabs = document.querySelectorAll('.tabs__li')
const projectFolder = document.querySelectorAll('.folder__li')
const folders = document.querySelectorAll('.folder')

tabs.forEach(function (eachTab, i) {
    tabs[i].addEventListener('click', function () {
        tabs.forEach(function (eachTab, i) {
            tabs[i].classList.remove('active')
        })
        tabs[i].classList.add('active')
        folders.forEach(function (eachFolder, i) {
            folders[i].classList.add('hidden')
        })
        folders[i].classList.remove('hidden')
    })
})

// Cuango hago click en CUALQUIER .folder__button
// REMOVE la clase active a TODOS los .folder__button
// ADD la clase active al .folder__button MISMO INDEX
// ADD la clase hidden a TODOS los .article
// REMOVE la clase hidden a .article mismo index
const folderBtn = document.querySelectorAll('.folder__button')
const projects = document.querySelectorAll('.article')

projectFolder.forEach(function (eachFolder, i) {
    projectFolder[i].addEventListener('click', function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
        projectFolder.forEach(function (eachFolder, i) {
            projectFolder[i].classList.remove('active')
            folderBtn[i].classList.remove('active')
        })
        folderBtn[i].classList.add('active')
        projectFolder[i].classList.add('active')
        projects.forEach(function(eachProject , i){
            projects[i].classList.add('hidden')
        })
        projects[i].classList.remove('hidden')
    })
})

//Cuando hago click en cualquier .tabs__li
// el primer .folder__li que no tiene la clase hidden
//se le ADD la clase active
// y  REMOVE la clase hidden al .article hidden MISMO INDEX

// Cuando hago click en .tabs__li [0]
// REMOVE la clase active a TODOS los .folder__button
// ADD la clase hidden a TODOS los .article
// ADD la clase active a .folder__li[0]
// REMOVE la clase hidden a .article [0]
tabs[0].addEventListener('click', function(){
    projectFolder.forEach(function(eachBtn , i){
        projectFolder[i].classList.remove('active')
        folderBtn[i].classList.remove('active')
    })
    projects.forEach(function(eachProject, i){
        projects[i].classList.add('hidden')
    })
    projectFolder[0].classList.add('active')
    folderBtn[0].classList.add('active')
    projects[0].classList.remove('hidden')
})

// Cuando hago click en .tabs__li [1]
// REMOVE la clase active a TODOS los .folder__button
// ADD la clase hidden a TODOS los .article
// ADD la clase active a .folder__li[3]
// REMOVE la clase hidden a .article [3]
tabs[1].addEventListener('click', function(){
    projectFolder.forEach(function(eachbtn , i){
        projectFolder[i].classList.remove('active')
        folderBtn[i].classList.remove('active')
    })
    projects.forEach(function(eachProject, i){
        projects[i].classList.add('hidden')
    })
    projectFolder[3].classList.add('active')
    folderBtn[3].classList.add('active')
    projects[3].classList.remove('hidden')
})

// Cuando hago click en .tabs__li [2]
// REMOVE la clase active a TODOS los .folder__button
// ADD la clase hidden a TODOS los .article
// ADD la clase active a .folder__li[5]
// REMOVE la clase hidden a .article [5]
tabs[2].addEventListener('click', function(){
    projectFolder.forEach(function(eachBtn, i){
        projectFolder[i].classList.remove('active')
        folderBtn[i].classList.remove('active')
    })
    projects.forEach(function(eachProject , i){
        projects[i].classList.add('hidden')
    })
    projectFolder[5].classList.add('active')
    folderBtn[5].classList.add('active')
    projects[5].classList.remove('hidden')
})

