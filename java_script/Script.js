const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var body = document.querySelector('body')
var flag = 0


if(bar){
  bar.addEventListener('click', () => {
    nav.style.right = 0
    close.style.display = "block"
    console.log("open")
  })
}


if(close){
  close.addEventListener('click', () => {
    nav.style.right = "-300px"
    console.log("close")
  })
}

  // document.addEventListener("DOMContentLoaded", function() {
  //   // Simulate loading time
  //   setTimeout(function() {
  //     document.getElementById("preloader").style.display = "none";
  //     document.getElementById("content").classList.remove("hidden");
  //     document.getElementById("content").classList.add("visible");
  //   }, 2000); // Adjust the time as needed
  // });