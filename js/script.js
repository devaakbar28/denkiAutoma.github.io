// alert('Dimohon Buka Website Ini di Laptop atau di Komputer agar lebih Maksimal, Sedang PROSES Responsif Website.')

// Loaded Website
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// // Fungsi untuk membuka atau menutup dropdown
// function toggleDropdown() {
//   var dropdownMenu = document.getElementById("dropdownMenu");
  
//   // Periksa apakah dropdown saat ini ditampilkan
//   if (dropdownMenu.style.display === "block") {
//       // Sembunyikan dropdown jika sudah ditampilkan
//       dropdownMenu.style.display = "none";
//   } else {
//       // Tampilkan dropdown jika tersembunyi
//       dropdownMenu.style.display = "block";
//   }
// }

// // Klik di luar dropdown untuk menutup
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown-btn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       for (var i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.style.display === 'block') {
//               openDropdown.style.display = 'none';
//           }
//       }
//   }
// }

// Debounce function to limit the rate of function execution
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Function to handle scroll event (1)
const handleScroll = () => {
  const about = document.querySelector(".about");
  const rect = about.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (rect.top < viewportHeight && rect.bottom >= 0) {
    about.classList.add("visible");
  } else {
    about.classList.remove("visible");
  }
};

// Function to handle scroll event (2)
const handleScroll2 = () => {
  const maps = document.querySelector(".judul-maps");
  const rect2 = maps.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (rect2.top < viewportHeight && rect2.bottom >= 0) {
    maps.classList.add("visible");
  } else {
    maps.classList.remove("visible");
  }
};

// Function to handle scroll event (3)
const handleScroll3 = () => {
  const utama = document.querySelector(".utama");
  const rect3 = utama.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (rect3.top < viewportHeight && rect3.bottom >= 0) {
    utama.classList.add("visible");
  } else {
    utama.classList.remove("visible");
  }
};

// Debounce the scroll handlers
const debouncedHandleScroll = debounce(handleScroll, 100); // Adjust the delay as needed
const debouncedHandleScroll2 = debounce(handleScroll2, 100); // Adjust the delay as needed
const debouncedHandleScroll3 = debounce(handleScroll3, 100); // Adjust the delay as needed

document.addEventListener("DOMContentLoaded", () => {
  // Add scroll event listeners
  window.addEventListener("scroll", debouncedHandleScroll);
  window.addEventListener("scroll", debouncedHandleScroll2);
  window.addEventListener("scroll", debouncedHandleScroll3);

  // Trigger the scroll event handlers on load in case the content is already in view
  debouncedHandleScroll();
  debouncedHandleScroll2();
  debouncedHandleScroll3();

  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  const menu = document.querySelector("#menu");

  // menu di click
  menu.onclick = () => {
    navbarNav.classList.toggle("active");
  };

  // click diluar side bar nav
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });

  // Button Main
  const slider = document.querySelector(".slider");
  function activate(e) {
    const items = document.querySelectorAll(".item");
    if (e.target.matches(".next")) {
      slider.append(items[0]);
    } else if (e.target.matches(".prev")) {
      slider.prepend(items[items.length - 1]);
    }
  }

  document.addEventListener("click", activate, false);

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".navbar");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // e.preventDefault(); // Prevent default link behavior
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll event to hide/show header
  const header = document.querySelector("nav");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll Down
      header.classList.add("hidden");
    } else {
      // Scroll Up
      header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});

// slideShow 
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.querySelectorAll(".mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

// function plusSlides(n) {
//   let slides = document.querySelectorAll(".mySlides");
//   slideIndex += n;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   showSlides(); // Update slide display
// }

// showSlides(); // Initialize slideshow

// Maps Initialization
var map = L.map("map").setView([-6.243147725946436, 107.0945891514543], 25); // Koordinat pusat dan tingkat zoom

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-6.243147725946436, 107.0945891514543])
  .addTo(map)
  .bindPopup("Head Office")
  .openPopup();
