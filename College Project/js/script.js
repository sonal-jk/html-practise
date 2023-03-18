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
const a=document.querySelector(".text");
z.addEventListener("click",()=> {
y.classList.toggle("active");


})
z.addEventListener("click",()=> {
  a.classList.toggle("active");  
  })

let c=document.body;
const d=document.getElementById("hide");
d.addEventListener("click",()=>{
  var p=document.getElementById("com");
  var q=document.getElementById("name");
  var r=document.getElementById("email");
  if (p != '' || q != '' || r != ''){
    
    c.classList.add("hide");
    c.classList.add("show");
  }
  else{

  }

  console.log("hello");
})
 