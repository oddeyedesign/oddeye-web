'use strict'

// ----------------Toggle el modo incógnito--------------------

const incognito = () => {
    const toggleCheckbox = document.querySelector('.toggle__checkbox')
    // Selección de TODOS los elementos del documento 
    const fullWebsite = document.querySelectorAll('*')

    // A todos los elementos del documento
    fullWebsite.forEach(function (eaachElement , i){
        // Cuando hago click en .toggle__checkbox
        toggleCheckbox.addEventListener('click', () => {
        // Toggle la clase incognito en todos los elementos 
        fullWebsite[i].classList.toggle('incognito')
     })
    })
    }

    incognito()

// ----------------Fin toggle modo incógnito--------------------

// -----------------Inicio de Animación de carga ----------------


const loadingAnimation = () => {
    const wavesTop = document.querySelector('.waves__top')
    const wavesBottom = document.querySelector('.waves__bottom')

    // Cuando carga la página
    // REMOVE la clase active de .waves__top
    // REMOVE la clase active de .waves__bottom
    window.addEventListener('load', () => {
        wavesBottom.classList.remove('active')
        wavesTop.classList.remove('active')
    })
}

loadingAnimation()

// -----------------Fin de Animación de carga ----------------

// ---------------Inicio de Responsive Scripts ----------------------------

const adaptScreen = () => {

    // Definimos el valor inicial de ancho de la pantalla
    // Definimos que la pantalla del modo móvil <= que 1000
    // Definimos que la pantalla del modo desktop es > que 1000
    let screenWidth = window.innerWidth
    let mobileActive = screenWidth <= 1000

    // Seleccionamos todos los elementos a editar
    const mobileWrapper = document.querySelector('.mobile')
    const closeMobMenu = document.querySelector('.social__button')
    const headerWrapper = document.querySelector('.header__wrapper')

    const desktopMode = (() => {
        //  Si desktop mode:
        // ADD la clase invisible a .mobile
        // ADD la clase invisible a .social__button
        // REMOVE la clase hidden a .header__wrapper
        mobileWrapper.classList.add('invisible')
        closeMobMenu.classList.add('invisible')
        headerWrapper.classList.remove('hidden')

        // Espera .05
        // ADD la clase hidden a .mobile
        // ADD la clase hidden a .social__button
        // REMOVE la clase invisible a .header__wrapper
        setTimeout(() => {
            mobileWrapper.classList.add('hidden')
            closeMobMenu.classList.add('hidden')
            headerWrapper.classList.remove('invisible')
        }, 50)
    })

    const mobileMode = (() => {
        // Si mobile mode:
        // REMOVE la clase hidden a .mobile
        // REMOVE la clase hidden a .social__button
        // ADD la clase invisible a .header__wrapper
        mobileWrapper.classList.remove('hidden')
        closeMobMenu.classList.remove('hidden')
        headerWrapper.classList.add('invisible')

        // Espera .05
        // REMOVE la clase invisible a .mobile
        // REMOVE la clase invisible a .social__button
        // ADD la clase hidden a .header__wrapper
        setTimeout(() => {
            mobileWrapper.classList.remove('invisible')
            closeMobMenu.classList.remove('invisible')
            headerWrapper.classList.add('hidden')
        }, 50)
    })

    const modeSwitch = (function () {
        let screenWidth = window.innerWidth
        let mobileActive = screenWidth <= 1000
        // Si mobileActive es igual a false
        // llamamos a la función desktopmode
        // ELSE llamamos a la función mobilemode
        if (!mobileActive) {
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
}

adaptScreen()

// ---------------Fin de Responsive Scripts ----------------------------

// ---------------Inicio Header Scripts ----------------------------

const mobileMenuInteraction = () => {

    const mobileMenu = document.querySelector('.mobile')
    const header = document.querySelector('.header')
    const navLi = document.querySelectorAll('.nav__li')
    const closeMobMenu = document.querySelector('.social__button')
    const headerWrapper = document.querySelector('.header__wrapper')

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

    const expandMenu = () => {
        headerWrapper.classList.remove('hidden')
        header.classList.add('active')
        mobileMenu.classList.add('invisible')
    }

    const navAnimation = () => {
        setTimeout(() => {
            mobileMenu.classList.add('hidden')
            headerWrapper.classList.remove('invisible')
            navLi.forEach(function (eachLi, i) {
                setTimeout(() => {
                    navLi[0].classList.add('active')
                }, 200)
                setTimeout(() => {
                    navLi[1].classList.add('active')
                }, 400)
                setTimeout(() => {
                    navLi[2].classList.add('active')
                }, 600)
                setTimeout(() => {
                    navLi[3].classList.add('active')
                }, 800)
            }, 500)
        })
    }

    // Cuando hago click en .social__button
    // ADD la clase invisible a .header__wrapper
    // REMOVE la clase active a .header
    // REMOVE la clase hidden a .mobile
    // Espera .5
    // REMOVE la clase invisible a .mobile
    // ADD la clase hidden a .header__wrapper
    // Por cada .nav__li INDEX 
    // REMOVE la clase active
    const closeMenu = () => {
        headerWrapper.classList.add('invisible')
        header.classList.remove('active')
        mobileMenu.classList.remove('hidden')
    }

    const disableMenu = () => {
        setTimeout(() => {
            mobileMenu.classList.remove('invisible')
            headerWrapper.classList.add('hidden')

            navLi.forEach(function (eachLi, i) {
                navLi[i].classList.remove('active')
            })
        }, 500)
    }

    mobileMenu.addEventListener('click', () => {
        expandMenu()
        navAnimation()
    })

    closeMobMenu.addEventListener('click', () => {
        closeMenu()
        disableMenu()
    })
}

mobileMenuInteraction()


const languageSelector = () => {

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
}

languageSelector()

// ---------------Fin de Header Scripts ----------------------------

// ---------------Inicio de Tabs Scripts ---------------------------

const porfolioNavigation = () => {

    const tabs = document.querySelectorAll('.tabs__li')
    const projectFolder = document.querySelectorAll('.folder__li')
    const folders = document.querySelectorAll('.folder')
    const folderBtn = document.querySelectorAll('.folder__button')
    const projects = document.querySelectorAll('.article')

    const tabActivation = () => {
        // Cuando hago click en CUALQUIER .tabs__li
        // REMOVE la clase active a TODOS los tabs__li
        // ADD la clase active a tab__li MISMO INDEX
        // ADD la clase hidden a todos los .folder
        // REMOVE la clase hidden .folder MISMO INDEX
        tabs.forEach(function (eachTab, i) {
            tabs[i].addEventListener('click', function () {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                })
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
    }

    const folderActivation = () => {
        // Cuango hago click en CUALQUIER .folder__button
        // REMOVE la clase active a TODOS los .folder__button
        // ADD la clase active al .folder__button MISMO INDEX
        // ADD la clase hidden a TODOS los .article
        // REMOVE la clase hidden a .article mismo index
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
                projects.forEach(function (eachProject, i) {
                    projects[i].classList.add('hidden')
                })
                projects[i].classList.remove('hidden')
            })
        })
    }

    tabActivation()
    folderActivation()

    const defaultProjects = () => {
        const defaultDesignProject = () => {
            // Cuando hago click en .tabs__li [0]
            // REMOVE la clase active a TODOS los .folder__button
            // ADD la clase hidden a TODOS los .article
            // ADD la clase active a .folder__li[0]
            // REMOVE la clase hidden a .article [0]
            tabs[0].addEventListener('click', function () {
                projectFolder.forEach(function (eachBtn, i) {
                    projectFolder[i].classList.remove('active')
                    folderBtn[i].classList.remove('active')
                })
                projects.forEach(function (eachProject, i) {
                    projects[i].classList.add('hidden')
                })
                projectFolder[0].classList.add('active')
                folderBtn[0].classList.add('active')
                projects[0].classList.remove('hidden')
            })
        }
        const defaultUxProject = () => {
            // Cuando hago click en .tabs__li [1]
            // REMOVE la clase active a TODOS los .folder__button
            // ADD la clase hidden a TODOS los .article
            // ADD la clase active a .folder__li[3]
            // REMOVE la clase hidden a .article [3]
            tabs[1].addEventListener('click', function () {
                projectFolder.forEach(function (eachbtn, i) {
                    projectFolder[i].classList.remove('active')
                    folderBtn[i].classList.remove('active')
                })
                projects.forEach(function (eachProject, i) {
                    projects[i].classList.add('hidden')
                })
                projectFolder[3].classList.add('active')
                folderBtn[3].classList.add('active')
                projects[3].classList.remove('hidden')
            })
        }
        const defaultIllustrationProject = () => {
            // Cuando hago click en .tabs__li [2]
            // REMOVE la clase active a TODOS los .folder__button
            // ADD la clase hidden a TODOS los .article
            // ADD la clase active a .folder__li[5]
            // REMOVE la clase hidden a .article [5]
            tabs[2].addEventListener('click', function () {
                projectFolder.forEach(function (eachBtn, i) {
                    projectFolder[i].classList.remove('active')
                    folderBtn[i].classList.remove('active')
                })
                projects.forEach(function (eachProject, i) {
                    projects[i].classList.add('hidden')
                })
                projectFolder[5].classList.add('active')
                folderBtn[5].classList.add('active')
                projects[5].classList.remove('hidden')
            })
        }

        defaultDesignProject()
        defaultUxProject()
        defaultIllustrationProject()
    }

    defaultProjects()
}

porfolioNavigation()

// ---------------Fin de Tabs Scripts ---------------------------
