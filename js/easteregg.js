document.addEventListener("DOMContentLoaded", () => {
    var num = Math.floor(Math.random());

    console.log(num)

if (num == 0) {
    const linkBar = document.getElementById('link-bar')

    linkBar.classList.remove('transition-fade')
    linkBar.classList.add('transition-crazy')

}
});