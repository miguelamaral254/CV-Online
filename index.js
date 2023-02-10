/* Open menu */

function openMenu() {
  var closed = document.getElementById("itens");
  if (closed.style.display === "block") {
    closed.style.display = "none";
  } else {
    closed.style.display = "block";
  }
}