// var myNav = document.getElementById("mynav");
// window.onscroll = function () {
//   "use strict";
//   if (document.body.scrollTop >= 200) {
//     myNav.classList.add("nav-colored");
//     myNav.classList.remove("nav-transparent");
//   } else {
//     myNav.classList.add("nav-transparent");
//     myNav.classList.remove("nav-colored");
//   }
// };

let myNav = document.getElementById("nav");
window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 200) {
    myNav.classList.add("navbar_onScroll");
    // myNav.classList.remove("nav-transparent");
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("navbar_onScroll");
  }
};
