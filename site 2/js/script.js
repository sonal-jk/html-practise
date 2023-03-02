function myfunc(){
const x=document.getElementById("name").value;
const y=document.getElementById("roll").value;
localStorage.setItem("name",x);
localStorage.setItem("no",y);
console.log(x,y);

}