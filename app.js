var iconita_deschidere = document.querySelector(".icon-container a.iconita-deschidere");
iconita_deschidere.addEventListener("click", afisareMeniu);
    
var iconita_inchidere = document.querySelector(".icon-container a.iconita-inchidere");
iconita_inchidere.addEventListener("click", inchidereMeniu);

function inchidereMeniu(){
    var topbar = document.querySelector(".topbar");
    topbar.style.borderBottom = "0px";
    iconita_deschidere.style.display="block";
    iconita_inchidere.style.display="none";
    var menucontainer = document.querySelector(".menu-container");
    menucontainer.style.visibility = "hidden"; 
    const nav = document.querySelector(".menu ul");
    nav.setAttribute("inchis","yes")
  }
  
function afisareMeniu(clickEvent){

    var topbar = document.querySelector(".topbar");
    topbar.style.borderBottom = "3px solid #090011";
    
    var navigation = document.querySelector(".menu-container");
    navigation.style.visibility = "visible";

    const ul = document.querySelector(".menu ul");
    ul.style.display = "block"; 
  
    var navigation = document.querySelector(".menu ul");
    navigation.setAttribute("inchis","no")

    navigation.style.background="rgb(7, 124, 153)";
    navigation.style.width="100%";
    navigation.style.height="100%";
    navigation.style.position="fixed";
    navigation.style.top = 83 + "px";
    navigation.style.left="0px";
  
    var menu_items = navigation.querySelectorAll("li");
    
    for (var i = 0; i < menu_items.length; i++) {
      menu_items[i].style.display="block";
      menu_items[i].style.color="white";
      menu_items[i].style.width="20%";
      menu_items[i].style.display = "table";
      menu_items[i].style.margin = "0px auto 0px auto";
      menu_items[i].style.position="relative";
      menu_items[i].style.marginTop= "13%";
      menu_items[i].style.verticalAlign = "middle";
    }
  
    var items = document.querySelectorAll(".menu ul li a");
        
    for (var i = 0; i < items.length; i++) {
        items[i].style.color="white";
        items[i].style.fontSize = "24px";

    }

    iconita_deschidere.style.display="none";
    iconita_inchidere.style.display="block";
  
  }
