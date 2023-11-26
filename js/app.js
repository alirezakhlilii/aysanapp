



const navBtn = document.querySelector(".responsive_menu_button")
const navMenu = document.querySelector(".nav-menu-humber")
const closeBtn =document.querySelector(".close-menu-btn-humber-svg")


window.addEventListener('click', () => {
  if(navOpen) {
      toggleMenu();
  }
});
let showMenu = false;
let navOpen = false;


function toggleMenu() {
  if(!showMenu) {
    // navBtn.classList.add("responsive_menu_button_open")
    // navMenu.classList.add("responsive_menu__open")
    // navOpen = true;

      showMenu = true;
  }   
  else {
      navBtn.classList.remove("responsive_menu_button_open")
      navMenu.classList.remove("responsive_menu__open")
      // navOpen = false
    
      showMenu = false;
  }
}


navBtn.addEventListener("click",function(){
    if (navOpen){
        navBtn.classList.remove("responsive_menu_button_open")
        navMenu.classList.remove("responsive_menu__open")
        navOpen = false;
    } else{
        navBtn.classList.add("responsive_menu_button_open")
        navMenu.classList.add("responsive_menu__open")
        navOpen = true;
    }
})

closeBtn.addEventListener("click", function(){
  if(navOpen){
    navMenu.classList.add("responsive_menu__open")
    navOpen = false;
  } else{
    closeBtn.classList.add("close_menu_open")
    navMenu.classList.remove("responsive_menu__open")
    navOpen = true;
  }
})














// swiper card comment---------------------


var swiper = new Swiper('.mySwiper', {
  
  
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination",
      },
   
    
    // navigation: {
    //   nextEl: '.swiper-button-next1',
    //   prevEl: '.swiper-button-prev1',
    // },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup:1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      999: {
        slidesPerView: 3,
        spaceBetween:15,
        slidesPerGroup: 1,
      },
      1367: {
        slidesPerView: 3,
        spaceBetween:20,
        slidesPerGroup: 1,
        spaceBetweenSlides: 3
      },
      1679: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetweenSlides: 3
      }
    },
  
  });



  var swiper = new Swiper('.mySwiper1', {
  
  
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination1",
      },
   
    
    // navigation: {
    //   nextEl: '.swiper-button-next1',
    //   prevEl: '.swiper-button-prev1',
    // },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup:1,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      999: {
        slidesPerView: 3,
        spaceBetween:15,
        slidesPerGroup: 1,
      },
      1367: {
        slidesPerView: 3,
        spaceBetween:20,
        slidesPerGroup: 1,
        spaceBetweenSlides: 4
      },
      1679: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetweenSlides: 4
      }
    },
  
  });




// REPLAY COMMENT SECTION IN BLOG DETAIL PAGE ---------------------------

let sendCommentReplay = document.querySelectorAll('.send-replay-comment-text')
let formReplayComment = document.querySelector('.form-replay-comment')
let cancelBtn = document.querySelector('.cancelito')

for (let i =0 ; i < sendCommentReplay.length; i+=1){
  sendCommentReplay[i].addEventListener('click' , function(event){
    formReplayComment.style.display = 'block'
  })
  cancelBtn.addEventListener('click' , function() {
    formReplayComment.style.display = 'none'
  })
}






// sendCommentReplay.forEach(function(item){
//   item.addEventListener('click' , function(){
//     formReplayComment.style.display = 'block'
    
    
//   })
//   cancelBtn.addEventListener('click' , function() {
//     formReplayComment.style.display = 'none'
//   })
// })









// acoordeion -----------------------



var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    

    
    

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      
    } else {
      panel.style.display = "block";
    }
  });
} 

