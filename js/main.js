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
  const subject =
    document.getElementById("subject").value || "MBK Contact Form";
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

$(document).ready(function () {
  $(".regions-carousel-top").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 0,
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    slideTransition: "linear",
    autoplayHoverPause: false,
    dots: false,
    nav: false, // we'll use custom nav
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 6 },
    },
  });

  // Repeat same setup for bottom carousel if needed
  $(".regions-carousel-bottom").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 0,
    autoplaySpeed: 500,
    smartSpeed: 6000,
    slideTransition: "linear",
    autoplayHoverPause: false,
    dots: false,
    nav: false,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 6 },
    },
  });
});

const bibleVerses = [
  {
    text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be competent, equipped for every good work.",
    ref: "2 Timothy 3:16-17",
  },
  {
    text: "Be merciful, even as your Father is merciful. Judge not, and you will not be judged; condemn not, and you will not be condemned; forgive, and you will be forgiven.",
    ref: "Luke 6:36-37",
  },
  {
    text: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    ref: "Ephesians 4:32",
  },
  {
    text: "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.",
    ref: "1 Peter 2:24",
  },
  {
    text: "Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil.",
    ref: "Ephesians 4:26-27",
  },
  {
    text: "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.",
    ref: "John 13:34",
  },
  {
    text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    ref: "Jeremiah 29:11",
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    ref: "Romans 8:28",
  },
  {
    text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    ref: "Romans 8:38-39",
  },
  {
    text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake.",
    ref: "Psalm 23:1-3",
  },
];

function getDailyVerse() {
  const today = new Date();
  const index = today.getDate() % bibleVerses.length;
  return bibleVerses[index];
}

function displayVerse() {
  const verse = getDailyVerse();
  document.getElementById("verseText").textContent = `“${verse.text}”`;
  document.getElementById("verseRef").textContent = `– ${verse.ref}`;
}

function toggleVerse() {
  const verseContent = document.getElementById("bibleVerseContent");
  const showBtn = document.getElementById("showVerseBtn");

  if (verseContent.style.display === "none") {
    verseContent.style.display = "block";
    showBtn.classList.add("d-none");
  } else {
    verseContent.style.display = "none";
    showBtn.classList.remove("d-none");
  }
}

function makeDraggable(el) {
  let posX = 0,
    posY = 0,
    currentX = 0,
    currentY = 0,
    dragging = false;

  const onMouseDown = (e) => {
    dragging = true;
    currentX = (e.touches ? e.touches[0].clientX : e.clientX) - posX;
    currentY = (e.touches ? e.touches[0].clientY : e.clientY) - posY;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onMouseMove, { passive: false });
    document.addEventListener("touchend", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;

    e.preventDefault();
    posX = (e.touches ? e.touches[0].clientX : e.clientX) - currentX;
    posY = (e.touches ? e.touches[0].clientY : e.clientY) - currentY;
    el.style.transform = `translate(${posX}px, ${posY}px)`;
  };

  const onMouseUp = () => {
    dragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", onMouseUp);
  };

  el.addEventListener("mousedown", onMouseDown);
  el.addEventListener("touchstart", onMouseDown);
}

window.onload = () => {
  displayVerse();
  makeDraggable(document.getElementById("bibleVerseWidget"));
};

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
