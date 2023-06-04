function myFunction() {
  var x = document.getElementById("nav-link-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let btn = document.querySelector(".icon");
        let icon = btn.querySelector(".fa-bars");

        btn.onclick = function (){
            if(icon.classList.contains("fa-bars")){
                icon.classList.replace("fa-bars", "fa-times");
            }
            else{
                icon.classList.replace("fa-times", "fa-bars");
            }
        }