

const text = "Once upon a time...";
const loadingElem = document.getElementById("loading");
let i = 0;
function typeWriter() {
  if (i < text.length) {
    loadingElem.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();