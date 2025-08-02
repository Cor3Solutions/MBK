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
    smartSpeed: 1500,
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

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
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
  // Your FB Page Username or Page ID
  const pageUsername = "jaddengg"; // <-- Change to your FB page username

  // Get message from the form
  const name = document.getElementById("name").value || "(No Name)";
  const email = document.getElementById("email").value || "(No Email)";
  const phone = document.getElementById("phone").value || "(No Phone)";
  const subject =
    document.getElementById("subject").value || "MBK Contact Form";
  const message = document.getElementById("message").value || "(No Message)";

  // Combine message text
  const messengerMessage = `Hello! My name is ${name}.
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(messengerMessage);

  // Try to open Messenger with pre-filled text (works mostly on mobile)
  const messengerUrl = `https://m.me/${pageUsername}?text=${encodedMessage}`;

  // Open in new tab/window
  window.open(messengerUrl, "_blank");
}
