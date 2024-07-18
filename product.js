var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
menu.addEventListener("click",function(){
    sidenav.style.right=0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//serach functionality

var pcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = pcontainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()


for(i = 0; i < productlist.length; i++)
{

var productname = productlist[i].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enteredvalue)<0)
    {
        productlist[i].style.display="none"
    }
    else{
        productlist[i].style.display="block"

    }
}
})

