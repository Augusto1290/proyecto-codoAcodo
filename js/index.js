document.addEventListener('DOMContentLoaded', function() {
    try{
        new Glide('.glide', {
            type: 'carousel',
            starAt: 0,
            perView: 3,
            gap: 30,
            breakpoint: {
                991:{
                    perView: 2
                },
                768: {
                    perView: 1
                }
            }
        }).mount();
    }
    catch (error){
        console.log("Error en glide")
    }
});