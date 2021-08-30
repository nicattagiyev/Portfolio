var moon=document.getElementById("moon");

let z=true
function myFunction() {
if(z==true){
    var element = document.body;
    element.classList.toggle("dark-mode");
    moon.innerHTML=`<i class="fas fa-sun"></i>`;
    moon.style.color="#F28C38"

    z=false
}
else{
    var element = document.body;
    element.classList.toggle("dark-mode");
    moon.innerHTML=`<i class="fas fa-moon"></i`;
    moon.style.color="black"
    element.style.transition="600ms"
    z=true  
}
  }

  var navbarlits=document.querySelector(".navbar-list");
  var burgermenu=document.querySelector(".burger-menu");
  burgermenu.addEventListener('click',function(){
navbarlits.classList.toggle("show-menu");

  })

  $(document).ready(function(){
    $('#btndownload').click(function(e){
      e.preventDefault();
      window.location.href="cv.pdf"
    })
  })
