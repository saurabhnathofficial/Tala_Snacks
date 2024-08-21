// // locomotive js
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});















var btn = document.querySelector("#menubtn");
var full_screen_nav = document.querySelector("#full_screen_nav");
var flag = 0;


const lineFiller = document.getElementById('line-filler');
const text_card_animation = document.getElementById('text_card_animation');

var card1 = document.querySelector("#text_card_animation #card1");
var card2 = document.querySelector("#text_card_animation #card2");
var card3 = document.querySelector("#text_card_animation #card3");
var card4 = document.querySelector("#text_card_animation #card4");
var card5 = document.querySelector("#text_card_animation #card5");

var animetion1 = document.querySelector("#text_card_animation .main_enime .row1 .right");
var animetion2 = document.querySelector("#text_card_animation .main_enime .row2 .right");
var animetion3 = document.querySelector("#text_card_animation .main_enime .row3 .right");
var animetion4 = document.querySelector("#text_card_animation .main_enime .row4 .right");
var animetion5 = document.querySelector("#text_card_animation .main_enime .row5 .right");




btn.addEventListener("click", function (d) {

  if (flag == 0) {
    full_screen_nav.style.top = "0%"
    document.querySelector("#nav h2").style.color = "#222"
    document.querySelector(".nav_part2 ul li a").style.color = "#222"
    document.querySelector(".nav_part2 ul li p").style.color = "#222"
    document.querySelector(".nav_part2 ul li p i").style.transform = 'rotate(90deg)'

    flag = 1
  } else {
    full_screen_nav.style.top = "-100vh"
    document.querySelector("#nav h2").style.color = "#fff"
    document.querySelector("#nav .nav_part2 a").style.color = "#fff"
    document.querySelector("#nav .nav_part2 p").style.color = "#fff"
    flag = 0;
  }
  btn.classList.toggle('rotate');
});


var tl = gsap.timeline();
tl.from("#home_page h1", {
  y: 55,
  duration: 1,
  opacity: 0
})
  .from("#home_page h2", {
    y: 40,
    duration: 0.5,
    delay: "-0.6",
    opacity: 0
  })
  .from("#home_page p", {
    y: 40,
    duration: 0.6,
    delay: "-.23",
    opacity: 0
  })

gsap.to("#banner img,.overlay", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#banner img,.overlay",
    scroller: "#main",
    start: "top 70%",
    end: "top 20%",
    scrub: 1.5
  }
})
gsap.from("#text_content h2", {
  opacity: 0,
  y: 90,
  rotateX: -100,
  scrollTrigger: {
    trigger: '#text_content h2',
    scroller: '#main',
    scrub: 2,
    //   markers:true,
    start: 'top 80%',
    end: 'top 30%',
  },
})
duration: 1,


  // ------------------------------------Row filler Animation-------------------------------------------------





  gsap.to("#line-filler", {
    width: "100%",
    // ease: "none"
    scrollTrigger: {
      trigger: "#text_card_animation",
      scroller: "#main",
      start: "top 90%",
      end: "top 10%",
      scrub: 2,
    }
  });



// -------------------------------text_animation2---------------------------------------

var slid1 = document.querySelectorAll("#text_animation .slid1_h1 h1")
slid1.forEach(function (dts) {
  gsap.to(dts, {
    transform: 'translateX(0%)',
    scrollTrigger: {
      trigger: "#text_animation",
      scroller: "#main",
      scrub: 10
    }
  })
})
var slid2 = document.querySelectorAll("#text_animation .slid2_h1 h1")
slid2.forEach(function (dts) {
  gsap.to(dts, {
    transform: 'translateX(-100%)',
    scrollTrigger: {
      trigger: "#text_animation",
      scroller: "#main",
      scrub: 10
    }
  })
})

document.querySelector("#elements .element1").addEventListener("mousemove", function (dts) {
  document.querySelector(".element1 img").style.opacity = 1;
  document.querySelector(".element1 img").style.left = `${dts.x - 40}px`;
  document.querySelector(".element1 img").style.top = `${dts.y - 300}px`;
})
document.querySelector("#elements .element2").addEventListener("mousemove", function (e) {
  document.querySelector(".element2 img").style.opacity = 1;
  document.querySelector(".element2 img").style.left = `${e.x - 1110}px`;
  document.querySelector(".element2 img").style.top = `${e.y - 300}px`;

})
document.querySelector("#elements .element1").addEventListener("mouseleave", function () {
  document.querySelector(".element1 img").style.opacity = 0;
})
document.querySelector("#elements .element2").addEventListener("mouseleave", function () {
  document.querySelector(".element2 img").style.opacity = 0;
})



// -------------------------------text_card_animation---------------------------------------



card1.style.transition = 'left 0.8s ease, transform 0.8s ease, background 0.2s ease';

animetion1.addEventListener("mousemove", function (e) {
  card1.style.opacity = 1;
  card1.style.left = `${e.x - 120}px`;
  card1.style.transform = 'rotate(14deg)';
  card1.style.background = '#C09D0B';
});

animetion1.addEventListener("mouseleave", function (e) {
  card1.style.transform = '';
  card1.style.left = 0;
  card1.style.top = '-80%';
  card1.style.opacity = '';
});

card2.style.transition = 'left 0.8s ease, transform 0.8s ease, background 0.2s ease';

animetion2.addEventListener("mousemove", function (e) {
  card2.style.opacity = 1;
  card2.style.left = `${e.x - 120}px`;
  card2.style.transform = 'rotate(14deg)';
  card2.style.background = '#E9FF22';
});

animetion2.addEventListener("mouseleave", function (e) {
  card2.style.transform = '';
  card2.style.left = 0;
  card2.style.top = '-80%';
  card2.style.opacity = '';
});

card3.style.transition = 'left 0.8s ease, transform 0.8s ease, background 0.2s ease';

animetion3.addEventListener("mousemove", function (e) {
  card3.style.opacity = 1;
  card3.style.left = `${e.x - 120}px`;
  card3.style.transform = 'rotate(14deg)';
  card3.style.background = '#03EEA0';

});

animetion3.addEventListener("mouseleave", function (e) {
  card3.style.transform = '';
  card3.style.left = 0;
  card3.style.top = '-80%';
  card3.style.opacity = '';
});


card4.style.transition = 'left 0.8s ease, transform 0.8s ease, background 0.2s ease';

animetion4.addEventListener("mousemove", function (e) {
  card4.style.opacity = 1;
  card4.style.left = `${e.x - 120}px`;
  card4.style.transform = 'rotate(14deg)';
  card4.style.background = '#FB2276';

});

animetion4.addEventListener("mouseleave", function (e) {
  card4.style.transform = '';
  card4.style.left = 0;
  card4.style.top = '-80%';
  card4.style.opacity = '';
});


card5.style.transition = 'left 0.8s ease, transform 0.8s ease, background 0.2s ease,';

animetion5.addEventListener("mousemove", function (e) {
  card5.style.opacity = 1;
  card5.style.left = `${e.x - 120}px`;
  card5.style.transform = 'rotate(14deg)';
  card5.style.background = 'rgb(69, 175, 210)';

});

animetion5.addEventListener("mouseleave", function (e) {
  card5.style.transform = '';
  card5.style.left = 0;
  card5.style.top = '-80%';
  card5.style.opacity = '';
});


// ------------------------------------text content2--------------------------------



var t = gsap.timeline();
t.from("#text_content2 h2", {
  opacity: 0,
  y: 10,
  scrollTrigger:{
    trigger: "#text_content2",
    scroller:"#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
  }
})

