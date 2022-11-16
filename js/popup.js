document.querySelector("#show-signin").addEventListener("click", function(){
    document.querySelector(".signin-popup").classList.add("active");
});
document.querySelector(".signin-popup .close-btn").addEventListener("click", function(){
    document.querySelector(".signin-popup").classList.remove("active");
});

document.querySelector("#show-signup").addEventListener("click", function(){
    document.querySelector(".signup-popup").classList.add("active");
});
document.querySelector(".signup-popup .close-btn").addEventListener("click", function(){
    document.querySelector(".signup-popup").classList.remove("active");
});