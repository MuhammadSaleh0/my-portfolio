'use strict';

////////////////Start Loading Screen////////////////
// When the page loaded ..
// $(window).on("load", function () {
//     //Fade out spinner first in 2s after page loaded ..
//     $(".loading .run").fadeOut(2000,
//         function () {
//             //Reset body to overflow (auto) again after loading screen fade out ..
//             $("body").css("overflow", "auto");
//             //Fade out background 2s after spinner fade out ..
//             $(this).parent().fadeOut(1000,
//                 function () {
//                     // Show color box ..
//                     $(".color-box").css("display", "block");
//                     //Remove loading screen from DOM tree
//                     $(this).remove;
//                 });
//         });
// });
////////////////End Loading Screen////////////////


const loading = document.querySelector('.loading');

const fadeOutLoading = () => {
    setTimeout(() => {
        loading.style.display = 'none'
    }, 2000)

    const fadeLoading = () => {
        const interval = setInterval(() => {
            if (!loading.style.opacity) {
                loading.style.opacity = 1
            }
            if (loading.style.opacity < 0.1) {
                clearInterval(interval)
            } else {
                loading.style.opacity -= .5
            }
        }, 100)
    }
    setTimeout(() => fadeLoading(), 500)
}
// Window.onload()
fadeOutLoading();


const home = document.querySelector('#home');
const navbar = document.querySelector('.navbar');
let mybutton = document.getElementById("myBtn");
const optinos = {
    // rootMargin: '-400px'
    threshold: 0.86
};
const observer = new IntersectionObserver((enterires, observer) => {
    enterires.forEach(entry => {
        // console.log(entry);
        if (!entry.isIntersecting) {
            if (!navbar.classList.contains("scrolled")) {
                // add scrolled to navbar only one time ..
                navbar.classList.add('scrolled');
            }
            mybutton.style.display = "block";
        }
        if (entry.isIntersecting) {
            //check if navbar has class scrolled or not .. (for best performance)
            if (navbar.classList.contains("scrolled")) {
                // remove scrolled to navbar only one time ..
                navbar.classList.remove('scrolled');
            }
            mybutton.style.display = "none";
        }
    })
}, optinos);
observer.observe(home)



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
////////////////End Scroll to top////////////////



////////////////////Start Script for Navbar Active Tab////////////////////

const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(e => {
            e.classList.remove('active');
        })
        link.classList.add('active');
    })
})
////////////////////End Script for Navbar Active Tab//////////////////////




////// Start add animation to job ////////
// add job title animation when page loaded ..
const jobTitle = document.querySelector('.job-title');
window.onload = () => {
    jobTitle.classList.add('job-title-animation')
}

//////// End add animation to job ////////



//////// Start Show more ////////
// $(".show-more").click(function () {
//     $(".paginations").slideToggle();
//     var $this = $(this);
//     $this.toggleClass('toggle');
//     if ($this.hasClass('toggle')) {
//         $this.text('Less projects');
//     } else {
//         $this.text('More projects');
//     }
// });

const showMore = document.querySelector('.show-more')

const projects = document.querySelectorAll('.paginations');


showMore.addEventListener('click', () => {
    projects.forEach((project) => {
        console.log(project);
        project.classList.toggle('showProjects')
        setTimeout(() => {
            project.classList.toggle('scaleProjects')
        }, 500)
    })
})


  //////// End Show more ////////