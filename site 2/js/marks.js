window.addEventListener('load',()=>{
    const name=localStorage.getItem("name");
    const roll=localStorage.getItem("no");
    document.querySelector(".go").innerHTML=name;
    document.querySelector(".go2").innerHTML=roll;
})