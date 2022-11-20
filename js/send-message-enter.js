var input = document.getElementById("msg");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sendmsg").click();
  }
});