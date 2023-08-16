//____________MODAL BUY NOW__________
const buttonBuyNow = document.getElementById('buttonBuyNow');
console.log(buttonBuyNow);
const modalBuy = document.getElementById('myModalBuy');

const closeModalBuy = document.getElementById('closeModalBuy');


buttonBuyNow.addEventListener ('click', function (){
modalBuy.classList.add('show-modal');
});

closeModalBuy.addEventListener ("click", function() {
    modalBuy.classList.remove('show-modal');
})

window.onclick = function(e) {
    const modalBuy = document.getElementById('myModalBuy');

     let target = e.target;
     if (target == modalBuy) {
    modalBuy.classList.remove('show-modal');
     }    
}

//___________MODAL LOCATION_____________

const buttonLocation = document.getElementById('buttonLocation');
const modalLocation = document.getElementById('myModalLocation');
const closeModalLocation = document.getElementById('closeModalLocation');

buttonLocation.addEventListener ('click', function (){
    modalLocation.classList.add('show-modal');
    });
    
    closeModalLocation.addEventListener ("click", function() {
        modalLocation.classList.remove('show-modal');
    })
    
    window.onclick = function(e) {
        const modalLocation = document.getElementById('myModalLocation');
    
         let target = e.target;
         if (target == modalLocation) {
     modalLocation.classList.remove('show-modal');
         }    
    }

//__________MODAL FRANCHAISE_______________

const buttonFranchaise = document.getElementById('buttonFranchaise');
const modalFranchaise = document.getElementById('myModalFranchaise');
const closeModalFranchaise = document.getElementById('closeModalFranchaise');

buttonFranchaise.addEventListener ('click', function (){
    modalFranchaise.classList.add('show-modal');
    });
    
    closeModalFranchaise.addEventListener ("click", function() {
        modalFranchaise.classList.remove('show-modal');
    })
    
    window.onclick = function(e) {
        const modalFranchaise = document.getElementById('myModalFranchaise');
    
         let target = e.target;
         if (target == modalFranchaise) {
            modalFranchaise.classList.remove('show-modal');
         }    
    }

    // _________MODAL ICE-CREAM SORT INGREDIENTS_________

    const iceCreamSort1 = document.getElementById('ice-cream_sort-1');
    const iceCreamSort2 = document.getElementById('ice-cream_sort-2');
    const iceCreamSort3 = document.getElementById('ice-cream_sort-3');
const modalIceCreamSort1 = document.getElementById('myModalIngredients1');
const modalIceCreamSort2 = document.getElementById('myModalIngredients2');
const modalIceCreamSort3 = document.getElementById('myModalIngredients3');
const closeModalFranchaise1 = document.getElementById('closeModalFranchaise1');
const closeModalFranchaise2 = document.getElementById('closeModalFranchaise2');
const closeModalFranchaise3 = document.getElementById('closeModalFranchaise3');

iceCreamSort1.addEventListener ('click', function (){
    modalIceCreamSort1.classList.add('show-modal');
    });

    iceCreamSort2.addEventListener ('click', function (){
        modalIceCreamSort2.classList.add('show-modal');
        });

        iceCreamSort3.addEventListener ('click', function (){
            modalIceCreamSort3.classList.add('show-modal');
            });
    
            closeModalFranchaise1.addEventListener ("click", function() {
                modalIceCreamSort1.classList.remove('show-modal');
    })

    closeModalFranchaise2.addEventListener ("click", function() {
        modalIceCreamSort2.classList.remove('show-modal');
})

closeModalFranchaise3.addEventListener ("click", function() {
    modalIceCreamSort3.classList.remove('show-modal');
})
    
    window.onclick = function(e) {
        // const modalFranchaise = document.getElementById('myModalFranchaise');
    
         let target = e.target;
         if (target == modalIceCreamSort1) {
            modalIceCreamSort1.classList.remove('show-modal');
         }   
         
         if (target == modalIceCreamSort2) {
            modalIceCreamSort2.classList.remove('show-modal');
         }  

         if (target == modalIceCreamSort3) {
            modalIceCreamSort3.classList.remove('show-modal');
         }  
    }


// __________SLIDER COMMENTS___________



const comments = document.querySelectorAll('.comments');
const dots = document.querySelectorAll('.dots');
const sliderLine = document.querySelector('.comments-slider-line');
let offset = 0;

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = dot.getAttribute('data-index');
        const slider = document.querySelector(".slider");
        const sliderWidth = parseInt(window.getComputedStyle(slider).width) + 5;
        showComment(index);
    
    // offset = index * 989;
offset = index * sliderWidth;
    sliderLine.style.left = -offset + 'px';

       });
     });

function showComment(index) {
   
    dots.forEach(dot => {
        dot.classList.remove('dots-active');
    });
    dots[index].classList.add('dots-active');
}

// ___________MODAL HOW ITS MADE_______________

const buttonReadMore = document.getElementById('buttonReadMore');
const modalHowMade = document.getElementById('myModalHowMade');
const closeModalHowMade = document.getElementById('closeModalHowMade');

buttonReadMore.addEventListener ('click', function (){
    modalHowMade.classList.add('show-modal');
    });
    
    closeModalHowMade.addEventListener ("click", function() {
        modalHowMade.classList.remove('show-modal');
    })
    
    window.onclick = function(e) {
        
    
         let target = e.target;
         if (target == modalHowMade) {
            modalHowMade.classList.remove('show-modal');
         }    
    }

    // ____________BURGER________________

    const burgerMenu = document.querySelector('.header__burger');
    const openMenuMobile = document.querySelector('.burger-menu-mobile');
    const closeMenuMobile = document.querySelector('.burger-close');

    burgerMenu.addEventListener('click', function(){
        openMenuMobile.style.display = 'block';
    })

    closeMenuMobile.addEventListener('click', function(){
        openMenuMobile.style.display = 'none';
    })

    const mobileMenuItems = document.querySelectorAll('.nav-item');
    const burgerList = document.querySelector('.burger-list');

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            openMenuMobile.style.display = 'none'; 
        });
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target == openMenuMobile) {
            openMenuMobile.style.display = 'none';
        }
        if (target == burgerList) {
            openMenuMobile.style.display = 'none';
        }
    });