var input = document.getElementById("msg");
var button = document.getElementById("sendmsg");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});