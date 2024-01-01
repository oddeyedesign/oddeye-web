'use strict'
// })
// Determino el valor por defecto de translateZ (2rem)
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
    const heroWindows = document.querySelectorAll('.hero__window')
    
    const winDefTranslZ = 5
    const winDefRotY = 30
    const winDefSkewY = -3
    const winDefBot = 10
    const winDefLeft = 5

   heroWindows.forEach(function (eachWindow){
    heroWindows.style.transform = `translateZ(${winDefTranslZ}rem) rotateY(${winDefRotY}deg) skewY(${winDefSkewY}deg)`
    heroWindows.style.bottom = `${winDefBot}%`
    heroWindows.style.left = `${winDefLeft}%`
   })

    //Hover de las ventanas "efecto 3D"
    // Definimos los valores de translatez, rotatey y skewy en hover
    //Cuando mouseover CUALQUIER hero__window aplica la transformación hover
    // cambiamos los valores default por hover
    // cuando mouseout
    // volvemos a poner los valores por defecto
    const hoverTranslZ = 0
    const hoverRotY = 0
    const hoverSkewY = 0

heroWindows.forEach(function(eachWindow){
    heroWindows.addEventListener('mouseover' , function(){
        heroWindows.style.transform = `translateZ(${hoverTranslZ}rem) rotateY(${hoverRotY}deg) skewY(${hoverSkewY}deg)`
    })

    heroWindows.addEventListener('mouseout' , function(){
        heroWindows.style.transform = `translateZ(${winDefTranslZ}rem) rotateY(${winDefRotY}deg) skewY(${winDefSkewY}deg)`
    })
})
