let mobile = document.querySelector(".mobile")
let menu = document.querySelector(".menu")
cross1=document.querySelector(".cross1")
cross2=document.querySelector(".cross2")
cross3=document.querySelector(".cross3")

menu.addEventListener("click",function(){
  mobile.classList.toggle("view");
  document.querySelector("body").classList.toggle("overflow-hidden")
  cross1.classList.toggle("cross4")
  cross2.classList.toggle("cross5")
  cross3.classList.toggle("cross6")
})
// back-to-top
function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 300) {
      topbtn.style.display = 'block';
  }
  else{
      topbtn.style.display = 'none';
  }
})
// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);