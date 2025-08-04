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
        counter.textContent = target.toLocaleString() + "+"; // Add "+" after finish
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
  const recipient = "telesforoleannefrank@gmail.com"; // <-- CHANGE TO YOUR EMAIL

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

function sendMessenger() {
  const name = document.getElementById("name").value || "(No Name)";
  const email = document.getElementById("email").value || "(No Email)";
  const phone = document.getElementById("phone").value || "(No Phone)";
  const subject = document.getElementById("subject").value || "MBK Contact Form";
  const message = document.getElementById("message").value || "(No Message)";

  const messengerMessage = `Hello! My name is ${name}.
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

  const encodedMessage = encodeURIComponent(messengerMessage);

  // Just your page username (not the whole URL)
  const pageUsername = "LFTelesforo";

  // Mobile prefill link
  const messengerUrl = `https://m.me/${pageUsername} `;

  // Open Messenger chat
  window.open(messengerUrl, "_blank");
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
