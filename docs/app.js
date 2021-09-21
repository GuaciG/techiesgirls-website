//menu responsive for mobile

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//slider - reviews

$(document).ready(function () {
  $(".reviews__container--wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 802,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//slider - customer logos

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 802,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

//modules accordion for mobile

const accordionButtons = document.querySelectorAll(".btn");

accordionButtons.forEach((accordionBtn) => {
  accordionBtn.addEventListener("click", () => {
    const height = accordionBtn.nextElementSibling.scrollHeight;
    accordionBtn.classList.toggle("active-btn");
    if (accordionBtn.classList.contains("active-btn")) {
      accordionBtn.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      accordionBtn.nextElementSibling.style.maxHeight = "0px";
    }
  });
});

// SCRIPT FOR BUTTON SCROLL TO TOP

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //Get the button
  const mybutton = document.getElementById("myBtnScr");

  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
