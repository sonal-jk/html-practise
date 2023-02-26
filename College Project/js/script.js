function dmode(){
    let x=document.body;
    x.classList.add("dark");
    x.classList.remove("light");

    

}
function lmode(){
    let x=document.body;
    x.classList.add("light");
    x.classList.remove("dark");
}
const z=document.getElementById("ham");
function myfunc(){
    
    z.classList.toggle("change");
    }
const y=document.querySelector(".cont");
z.addEventListener("click",()=> {
y.classList.toggle("active");

})
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }