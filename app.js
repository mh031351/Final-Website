

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


document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }
  














