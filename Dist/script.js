let searchItems = document.getElementById("searchItems");
let searchDiv = document.getElementById("searchDiv");

searchItems.style.display = "none";

searchDiv.addEventListener("click", function(){
    if(searchItems.style.display == "none"){
        searchItems.style.display = "block";
    }else{
        searchItems.style.display = "none"
    }
});

document.getElementById("remove").addEventListener("click", function(){
    if(searchItems.style.display == "block"){
        searchItems.style.display = "none"
    }else{
        searchItems.style.display = "block"
    }
});


let menuItems = document.getElementById("menuItems");
menuItems.style.display = "none";

document.getElementById("menuIcon").addEventListener("mouseover", function(){
    menuItems.style.display = "flex";
});

document.getElementById("menuIcon").addEventListener("mouseout", function(){
    menuItems.style.display = "none";
});

menuItems.addEventListener("mouseover",function(){
    menuItems.style.display = "flex";
});

menuItems.addEventListener("mouseout",function(){
    menuItems.style.display = "none";
});



