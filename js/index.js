'use strict'

// Estructura general
//Toggle Incognito
//Animación de carga
// Header Scrips
// Mobile Menu
//Selección de idioma
// Hero Scrips
    // Interacción info__window
    // Interacción Logo Oddeye
// Interacción First Section
// Interacción Third Section (Carrousel)

function indexScripts() {
    // ----------------Toggle el modo incógnito--------------------

    const incognito = () => {
        const toggleCheckbox = document.querySelector('.toggle__checkbox')
        // Selección de TODOS los elementos del documento 
        const fullWebsite = document.querySelectorAll('*')

        // A todos los elementos del documento
        fullWebsite.forEach(function (eaachElement, i) {
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
            requestAnimationFrame(() => {
                wavesBottom.classList.remove('active')
                wavesTop.classList.remove('active')
            })
        })
    }

    loadingAnimation()


    // -----------------Fin de Animación de carga ----------------


    // ---------------Inicio Header Scripts ----------------------------
    const mobileMenuInteraction = () => {
        //Selectores
        const closeMobMenu = document.querySelector('.social__button')
        const mobileMenu = document.querySelector('.mobile')
        const header = document.querySelector('.header')
        const navLi = document.querySelectorAll('.nav__li')
        const headerWrapper = document.querySelector('.header__wrapper')
        const mobileMode = window.innerWidth < 1000

        function hideWrapper() {
            if (mobileMode) {
                headerWrapper.classList.add('hidden')
            }
        }

        hideWrapper()


        const expandMenu = () => {
            // REMOVE la clase hidden a .header__wrapper
            // ADD la clase active a .header
            // ADD la clase invisible a .mobile
            headerWrapper.classList.remove('hidden')
            header.classList.add('active')
            mobileMenu.classList.add('invisible')
        }

        const navAnimation = () => {
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



        const closeMenu = () => {
            // ADD la clase invisible a .header__wrapper
            // REMOVE la clase active a .header
            // REMOVE la clase hidden a .mobile
            headerWrapper.classList.add('invisible')
            header.classList.remove('active')
            mobileMenu.classList.remove('hidden')
        }

        // Espera .5
        // REMOVE la clase invisible a .mobile
        // ADD la clase hidden a .header__wrapper
        // Por cada .nav__li INDEX 
        // REMOVE la clase active
        const disableMenu = () => {
            setTimeout(() => {
                mobileMenu.classList.remove('invisible')
                headerWrapper.classList.add('hidden')

                navLi.forEach(function (eachLi, i) {
                    navLi[i].classList.remove('active')
                })
            }, 500)
        }

        // Cuando hago click en .mobile
        // Activo expandMenu
        // Activo navAnimation
        mobileMenu.addEventListener('click', () => {
            expandMenu()
            navAnimation()
        })

        // Cuando hago click en .social__button
        // Activo closeMenu
        // Activo disableMenu
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

    // Main/Hero Scripts

    // #readme: cuando hago click se le add clase front, se le remove back y le add back/remove front a exe
    // #exe: cuando hago click se le add la clase front, se le remove back y e add back/remove front a readme
    // If front: aplicamos la clase hover en mouseover y se la remove en mouseout
    // .info__window: cuando hago click en el bottón close le aplico clase hidden a info__window
    // .window__content: Cuando hago click en min aplico clase hidden a window__content y a min y se la quito a res
    // res: cuando hago click se le add la classe hidden de nuevo y se la remove a min

    const fakeWindowInteraction = () => {

        // Selecciono los elementos
        const readme = document.getElementById('readme')
        const exe = document.getElementById('exe')
        const heroWin = document.querySelectorAll('.info__window')
        const closeBtn = document.querySelectorAll('.button__close')
        const minBtn = document.querySelectorAll('.button__min')
        const resBtn = document.querySelectorAll('.button__res')
        const winContent = document.querySelectorAll('.window__content')

        let readMeIsFront = (readme.classList.contains('front') == true)
        let exeIsFront = (exe.classList.contains('front') == true)

        const sendReadMeFront = () => {
            // REMOVE la clase front a #exe
            // ADD la clase back a #exe
            // REMOVE la clase back a #readme
            // ADD la clase front a #readme
            // LET readmeIsFront TRUE
            // LET exeIsFront FALSE
            exe.classList.remove('front')
            exe.classList.add('back')
            readme.classList.remove('back')
            readme.classList.add('front')
            readMeIsFront = true
            exeIsFront = false
        }

        const sendExeFront = () => {
            // REMOVE la clase front a #readme
            // ADD la clase back a #readme
            // REMOVE la clase back a #exe
            // ADD la clase front a #exe
            // LET readmeIsFront FALSE
            // LET exeIsFront TRUE
            readme.classList.remove('front')
            readme.classList.add('back')
            exe.classList.remove('back')
            exe.classList.add('front')
            exeIsFront = true
            readMeIsFront = false
        }

        const switchWindow = () => {
            // Cuando hago click en readme sendReandMeFront
            readme.addEventListener('click', sendReadMeFront)
            // Cuando hago click en exe sendExeFront
            exe.addEventListener('click', sendExeFront)

        }

        switchWindow()

        const readmeHover = () => {
            // Cuando hago POINTEROVER en #readme
            // SI readMeIsFront = true
            // ADD la clase hover a #readme
            readme.addEventListener('pointerover', () => {
                if (readMeIsFront) {
                    console.log('Readme front?' + readMeIsFront)
                    readme.classList.add('winHover')
                }
            })

            // Cuando hago MOUSEOUT en #readme
            // SI readMeIsFront = true
            // REMOVE la clase hover a #readme
            readme.addEventListener('pointerout', () => {
                if (readMeIsFront) {
                    readme.classList.remove('winHover')
                }
            })

        }

        readmeHover()


        const exeHover = () => {
            // Cuando hago MOUSEOVER en #exe
            // SI exeIsFront = true
            // ADD la clase hover a #exe
            exe.addEventListener('pointerover', () => {
                if (exeIsFront) {
                    exe.classList.add('winHover')
                }
            })

            // Cuando hago MOUSEOUT en #exe
            // SI exeIsFront = true
            // REMOVE la clase hover a #exe
            exe.addEventListener('pointerout', () => {
                if (exeIsFront) {
                    exe.classList.remove('winHover')
                }
            })
        }

        exeHover()



        const winButtonInteractions = () => {

            // Cuando hago click en CUALQUIER .button__close
            // Selecciono el .info__window más cercano a ese .button__close INDEX
            // Add la clase invisible a .info__window más cercano
            // Espera .5s 
            // Add la clase hidden a .info__window más cercano
            closeBtn.forEach(function (eachClose, i) {
                closeBtn[i].addEventListener('click', () => {
                    const closeButtonParent = eachClose.closest('.info__window')
                    closeButtonParent.classList.add('closed')
                    setTimeout(function () {
                        eachClose.classList.add('hidden')
                    }, '100')
                })
            })


            // Cuando hago click en CUALQUIER .button__min
            // Se le add la clase hidden a .button__min MISMO INDEX
            // Se le remove la clase hidden a .button__res MISMO INDEX
            // Se le add la clase invisible a .window__content MISMO INDEX
            // Espera .5s
            // Add la clase hidden a .window__conent MISMO INDEX
            minBtn.forEach(function (eachMin, i) {
                minBtn[i].addEventListener('click', () => {
                    minBtn[i].classList.add('hidden')
                    resBtn[i].classList.remove('hidden')
                    winContent[i].classList.add('minimized')
                    setTimeout(function () {
                        winContent[i].classList.add('hidden')
                    }, '200')
                })
            })

            //Cuando hago click en CUALQUIER .button__res
            // Se le add la clase hidden a .button__res MISMO INDEX
            // Se le remove la clase hidden a .button__min MISMO INDEX
            // Se le remove la clase invisible a .window__content MISMO INDEX
            //Espera.5s
            // Remove la clase hidden a a.window__content
            resBtn.forEach(function (eachRes, i) {
                resBtn[i].addEventListener('click', function () {
                    resBtn[i].classList.add('hidden')
                    minBtn[i].classList.remove('hidden')
                    winContent[i].classList.remove('hidden')
                    setTimeout(function () {
                        winContent[i].classList.remove('minimized')
                    }, '200')
                })
            })
        }

        winButtonInteractions()
    }

    fakeWindowInteraction()

    const oddEyeLogoInteraction = () => {
        // Interacción del Logo: ojos que siguen al cursor
        // Sigo este tutorial: https://www.youtube.com/watch?v=cwT0oLU8iF4
        // El tutorial no está comentando y no entiendo bien que hace
        // porque es un código muy avanzado asi que intento desgranarlo
        // para entenderlo lo mejor posible y no utilizar el código al tuntún

        //Selecciono en el documento las partes del SVG a las que quiero
        // aplicar la interacción:
        // #face
        // #snout
        // .eye__pupil
        const face = document.getElementById('face')
        const snout = document.getElementById('snout')
        const pupil = document.querySelectorAll('.eye__pupil')
        const hero = document.querySelector('.hero')

        // Definimos la posición del cursor en 0 en los ejes xy
        let cursorPosition = { x: 0, y: 0 }


        // Definimos el tamaño de la ventana con una función
        // La función contiene viewportHeight y viewportWidth
        function defineScreenSize() {
            let viewportHeight = window.innerHeight
            let viewportWidth = window.innerWidth
        }

        // Definimos la posicion actual del cursor en la variable cursorPosition
        // X = e.clientX
        // Y = e.clientY
        // https://www.w3schools.com/jsref/event_clientx.asp
        // Llamamos a la función follow para seguir el movimiento del mouse
        // *Follow se define más adelante
        function pointerMove(e) {
            cursorPosition = { x: e.clientX, y: e.clientY }
            follow()
        }

        // Definimos lookAtCursor con una función
        // Sus parámetros son element, xRatio e yRatio
        // Element = elementos a transformar
        // xRatio = distancia entre element y el cursor en eje X
        // yRatio = distancia entre el element y el cursor en eje Y
        const lookAtCursor = (element, xRatio, yRatio) => {
            // La posición de element la define get.boundingClientRect 
            // Que devuelve el tamaño y la posición del elemento en relación al viewport
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
            const elementOffset = element.getBoundingClientRect()
            // Calculamos el centro del elemento en el eje X: Ancho del elemento en x + ancho del elemento/2
            const centerX = elementOffset.x + elementOffset.width / 2
            // Calculamos el centro del elemento en el eje Y: Alto del elemento en y + alto del elemento/2  
            const centerY = elementOffset.y + elementOffset.height / 2
            // Calculamos la distancia entre el cursor y el centro del elemento en ambos ejes
            // Redondondeamos: cursorPosition.x - menos centerX * 100 / window.innerWidth
            const distanceLeft = Math.round(((cursorPosition.x - centerX) * 100) / window.innerWidth)
            // Redondeamos: cursorPosition.y - menos centerY * 100 / window.innerHeight
            // Esto nos da el vamor redondeado del porcentaje del alto y ancho de la ventana
            const distanceTop = Math.round(((cursorPosition.y - centerY) * 100) / window.innerHeight)
            // Aplicamos la transformación al estilo del elemento con translate calculando dos valores:
            // la distancia entre el cursor y distanceLeft/xRatio 
            // la distancia entre el cursor y distanceTop/yRatio
            element.style.transform = `translate(${distanceLeft / xRatio}rem, ${distanceTop / yRatio}rem)`
            // Añadimos una transition transform para suavizar el efecto
            element.style.transition = "transform .3s ease"
        }

        // Definimos la posición actual del elemento con la follow (que está en la función mousemove)
        const follow = function () {
            // SI el elemento es X lookAtCursor (elemento, valor de xRatio, valor de yRatio)
            if (pupil)
                // En el caso de pupil, como he utilizado querySelectorAll para optimizar:
                // forEach pupil INDEX asignamos un valor distinto (1 y 2 se salen del ojo si no)
                pupil.forEach(function (eachPupil, i) {
                    lookAtCursor(pupil[0], 50, 50)
                    lookAtCursor(pupil[1], 70, 70)
                    lookAtCursor(pupil[2], 90, 90)
                })

            if (snout) lookAtCursor(snout, 100, 100)
            if (face) lookAtCursor(face, 80, 80)
        }

        // Cuando hago resize en la ventana, activo la función defineScreenSize
        // Cuando hago mousemove en la ventana, activo la función mouseMove
        window.addEventListener('resize', defineScreenSize)
        hero.addEventListener('pointermove', pointerMove)

    }

    oddEyeLogoInteraction()

    // ---------------Fin de Main/Hero Scripts ----------------------------

    // ---------------Inicio de First Section ----------------------------
    const adaptFirst = () => {

        // Definimos el valor inicial de ancho de la pantalla
        // Definimos que la pantalla del modo móvil <= que 1000
        // Definimos que la pantalla del modo desktop es > que 1000
        let screenWidth = window.innerWidth
        let mobileActive = screenWidth <= 1000

        // Seleccionamos todos los elementos a editar
        const first = document.querySelector('.first')
        const firstAnimation = document.querySelector('.first__animation')
        const firstA = document.querySelector('.first__a')

        // Definimos lo que va a suceder en modo escritorio
        const desktopMode = (() => {
            // Cuando hago POINTEROVER en .first
            // ADD la clase play a .first__animation
            // ADD la clase play a first__a
            first.addEventListener('pointerover', () => {
                firstAnimation.classList.add('play')
                firstA.classList.add('play')
            
            // Cuando hago POINTEROUT en .first
            // REMOVE la clase play a .first__animation
            // REMOVE la clase play a .first__a
                first.addEventListener('pointerout', () => {
                    firstAnimation.classList.remove('play')
                    firstA.classList.remove('play')
                })
            })
        })

        // Definimos lo que pasa en modo móvil
        // Quiero que cuando abro la web en modo móvil esté "desplegado" por defecto
        // para evitar confusiones y problemas de usabilidad
        const mobileMode = (() => {
            // ADD la clase play a .first__animation
            // ADD la clase play a .first__a
            firstAnimation.classList.add('play')
            firstA.classList.add('play')
        })

        // Definimos cuándo se activará cada modo
        const modeSwitch = (function () {
            screenWidth = window.innerWidth
            mobileActive = screenWidth <= 1000
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
        window.addEventListener('load', modeSwitch())
    }

    adaptFirst()

    // ------------- Fin de First Section Scripts -------------------------

    // ------------- Inicio de Third Section Scripts ---------------------

    const thirdInteraction = () => {

        const carItems = document.querySelectorAll('.carrousel__wrapper')
        const carList = document.querySelector('.carrousel__ul')

        // Creo un fragmento
        // Por cada .carrousel__wrapper:
        // Creo un LI
        // Les ADD la clase carrousel__li
        // Dentro de cada LI creo un botón
        // los botones ADD la clase carrousel__button
        // les agrego el atributo title
        // Metemos los botones dentro de los li
        // Metemos los li dentro del fragmento
        // Metemos el fragmento dentro de carrousel_ul
        const dotList = document.createDocumentFragment()

        carItems.forEach(function (eachDot, index) {
            const li = document.createElement('li')
            li.classList.add('carrousel__li')

            const dotBtn = document.createElement('button')
            dotBtn.classList.add('carrousel__button')
            dotBtn.setAttribute('title', 'Carrousel Button')

            li.appendChild(dotBtn)
            dotList.appendChild(li)
        })

        carList.appendChild(dotList)

        //Cuando hago click en carrousel__button[0]
        //.carrousel__big translateX() --> INDEX * (100/dotBtn.lengh)

        //Cuando hago click en carrousel__button[1]
        //.carrousel__big translateX() --> INDEX * (100/dotBtn.lengh)

        //Cuando hago click en carrousel__button[2]
        //.carrousel__big translateX() --> INDEX * (100/dotBtn.lengh)

        //Cuando hago click en carrousel__button[3]
        //.carrousel__big translateX() --> INDEX * (100/dotBtn.lengh)

        //Cuando hago clic en .carrousel__button REMOVE active
        // .carrousel_dotbtn mismo index ADD active

        const dotBtn = document.querySelectorAll('.carrousel__button')
        const carBig = document.querySelector('.carrousel__big')

        dotBtn.forEach(function (eachDot, i) {
            dotBtn[i].addEventListener('click', function () {

                let translateXCalc = i * (100 / carItems.length)
                carBig.style.transform = `translateX(${-translateXCalc}%)`

                dotBtn.forEach(function (eachDot, i) {
                    dotBtn[i].classList.remove('active')
                })
                dotBtn[i].classList.add('active')
            })
        })

        // Dejamos el primer botón [0] activo por defecto
        dotBtn[0].classList.add('active')
    }

    thirdInteraction()

    // ---------------- Fin de Third Section Scripts ---------------------
}

indexScripts()


