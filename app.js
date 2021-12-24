

var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


//  search bar 

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }


// callModal//

 function callModal(name , price , img){
    var prodName = document.getElementById("prodName")
     var prodPrice = document.getElementById("prodPrice")
    var prodImg = document.getElementById("prodImg")
     prodName.innerHTML = name
    prodPrice.innerHTML = price 
        prodImg.src = i }
  














