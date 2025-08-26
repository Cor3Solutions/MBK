(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".nav-bar").addClass("sticky-top shadow-sm").css("top", "0px");
    } else {
      $(".nav-bar").removeClass("sticky-top shadow-sm").css("top", "-100px");
    }
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    smartSpeed: 500,
    dots: true,
    loop: true,
    nav: false,
    navText: [],
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 300,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: [],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300); // Fast scroll
    return false;
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 4000; // lower = faster

  const animateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toLocaleString() + "+";
      }
    };

    updateCount();
  };

  // Trigger animation when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target); // Run once
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

function sendEmail() {
  // Get form values
  const name = document.getElementById("name").value || "(No Name)";
  const email = document.getElementById("email").value || "(No Email)";
  const phone = document.getElementById("phone").value || "(No Phone)";
  const subject =
    document.getElementById("subject").value || "MBK Contact Form Submission";
  const message = document.getElementById("message").value || "(No Message)";

  // Your recipient email
  const recipient = "mbkphilippines@gmail.com"; // <-- CHANGE TO YOUR EMAIL

  // Format body
  const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

  // Open default mail client
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

// navbar collapse on click outside
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggle = document.querySelector(".navbar-toggler");

  // If navbar is open AND click is outside navbar & toggle button
  if (
    navbar.classList.contains("show") &&
    !navbar.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  }
});

// carousels for testimonials and other items
$(document).ready(function () {
  // Initialize the TOP carousel (Left-to-Right)
  $(".testimonial-carousel-top").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Increased pause between slides
    autoplaySpeed: 2000, // Slower, smoother transition speed
    slideTransition: "linear", // Linear transition for constant speed
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
      },
      768: {
        items: 2,
        stagePadding: 50,
      },
      992: {
        items: 3,
        stagePadding: 50,
      },
    },
  });

  // Initialize the BOTTOM carousel (Right-to-Left)
  $(".testimonial-carousel-bottom").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // Increased pause between slides
    autoplaySpeed: 2000, // Slower, smoother transition speed
    slideTransition: "linear", // Linear transition for constant speed
    autoplayHoverPause: true,
    rtl: true, // This option makes the carousel move Right-to-Left
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
      },
      768: {
        items: 2,
        stagePadding: 50,
      },
      992: {
        items: 3,
        stagePadding: 50,
      },
    },
  });
});

//Lessons
$(".lessons-carousel").owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
  },
});

// Regions carousels
$(document).ready(function () {
  $(".regions-carousel-top").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
    },
  });

  $(".regions-carousel-bottom").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    rtl: true, // This makes the carousel swipe from right to left
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
    },
  });
});
 

$(document).ready(function () {
  $(".lessons-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 0,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
    },
  });
});

const ball = document.getElementById("bibleBall");
let x = 100,
  y = 100;
let dx = 2,
  dy = 2;
const speed = 15;
let moving = true;

function moveBall() {
  const screenWidth = window.innerWidth - ball.offsetWidth;
  const screenHeight = window.innerHeight - ball.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= screenWidth) dx = -dx;
  if (y <= 0 || y >= screenHeight) dy = -dy;

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}
setInterval(moveBall, speed);

// Fetch Verse of the Day (OurManna API)
async function fetchVerseOfTheDay() {
  try {
    const res = await fetch("https://beta.ourmanna.com/api/v1/get?format=json");
    const data = await res.json();
    document.getElementById("verseText").innerText = data.verse.details.text;
    document.getElementById("verseRef").innerText =
      "– " + data.verse.details.reference;

    // Save to localStorage with today's date
    localStorage.setItem(
      "bibleVerse",
      JSON.stringify({
        text: data.verse.details.text,
        ref: data.verse.details.reference,
        date: new Date().toDateString(),
      })
    );
  } catch (e) {
    document.getElementById("verseText").innerText =
      "For God so loved the world that He gave His one and only Son.";
    document.getElementById("verseRef").innerText = "– John 3:16";
  }
}

// Load verse (check if already saved today)
function loadVerse() {
  const saved = JSON.parse(localStorage.getItem("bibleVerse"));
  const today = new Date().toDateString();

  if (saved && saved.date === today) {
    document.getElementById("verseText").innerText = saved.text;
    document.getElementById("verseRef").innerText = "– " + saved.ref;
  } else {
    fetchVerseOfTheDay();
  }
}

// Show verse modal
function showBibleVerse() {
  new bootstrap.Modal(document.getElementById("bibleVerseModal")).show();
}

// Run on page load
loadVerse();

// Refresh verse every 24 hours automatically
setInterval(fetchVerseOfTheDay, 24 * 60 * 60 * 1000);
