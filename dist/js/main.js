// Select DOM items of the menu

// selects the button-menu class (querySelector works with classes, ids...etc.)
const menuButton = document.querySelector(".button-menu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuProfilePic = document.querySelector(".menu-profilePic");

// Grab all 4 nav items (the li), querySelectorAll grabs all of them while querySelector just grabs the first one
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu, where menu is initially closed (false)
let showMenu = false; //note: let is a variable

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  //if false, i.e. the menu is not shown
  if (!showMenu) {
    menuButton.classList.add("close"); //add a close class to menuButton
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuProfilePic.classList.add("show");

    //loop through all nav items and add show class to each, item is just the name for each item
    navItems.forEach(item => item.classList.add("show"));

    //now menu is open, set it to true
    showMenu = true;
  } else {
    menuButton.classList.remove("close"); //remove a class in menuButton
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuProfilePic.classList.remove("show");

    //now menu is closed, set it to false
    showMenu = false;
  }
}
