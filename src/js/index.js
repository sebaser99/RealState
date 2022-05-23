let imagenes = document.querySelectorAll('.propiedad__imagen');
const width = window.innerWidth
const small = window.matchMedia("(min-width: 200px)");
const telefonoMq = window.matchMedia("(min-width: 480px)");
const tabletMq = window.matchMedia("(min-width: 768px)");


switch(width){
    case width < 200 :
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 400%'
        })
    break;

    case width > 201 :
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 250%'
        })
    break;
    case width > 480 :
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 170%'
        })
    break;

    default :
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 137%'
        })
    break;


}



//listener para cambiar tamaño del background desde los 200px
small.addEventListener('change', (e)=> {
    if(small.matches){
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 250%'
        })
    } else {
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 400%'
        })
    }
})
//listener para cambiar tamaño del background desde los 480px
telefonoMq.addEventListener('change', (e)=> {
    if(telefonoMq.matches){
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 170%'
        })
    } else {
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 250%'
        })
    }
})
//listener para cambiar tamaño del background desde los 768px
tabletMq.addEventListener('change', (e)=> {
    if(tabletMq.matches){
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 137%'
        })
    } else {
        imagenes.forEach(imagen => {
            imagen.style.backgroundSize = 'auto 170%'
        })
    }
})


document.addEventListener('scroll', ()=> {
    let scroll = this.scrollY / -20;
    imagenes.forEach(imagen => {
        imagen.style.backgroundPositionY = `${scroll}px`
    });
});
