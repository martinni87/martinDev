/**
 * The following function toggles on and off the responsive menu as list
 * by adding a "responsive" class to the html object so it can use the mediaquery
 * for that class
 *
 */

function toggleMenuResponsive() {
    var navBar = document.getElementById("navBar");

    if (navBar.className === "navBar") {
        navBar.className += " responsive";
    }
    else {
        navBar.className = "navBar";
    }
}
    