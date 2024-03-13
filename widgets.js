const widgets = {
  create: {
    nav: () => {
      newNav = document.createElement("div");
      newNav.innerHTML =
        '<!-- Top Navigation Menu --><div class="topnav"><a href="#home" class="active">Logo</a><!-- Navigation links (hidden by default) --><div id="myLinks"><a href="#news">News</a><a href="#contact">Contact</a><a href="#about">About</a></div><!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></div>';
      return newNav;
    },
    section: (innerHTML, children) => {
        const newSec = document.createElement("div");
        newSec.innerHTML = innerHTML;
        children.forEach((child) => {
            newSec.appendChild(child);
        });
        children.forEach((child) => {
          child.classList.add("child");
        });
        document.body.appendChild(newSec);
        return newSec;
    },
    p: (inner) => {
      newP = document.createElement("p");
      newP.innerHTML = inner;
      return newP;
    },
  },
};

//Nav
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
