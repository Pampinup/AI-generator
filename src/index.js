function generateStory(event) {
  event.preventDefault();

  new Typewriter("#loading", {
    strings: ["Working on it", "Please wait..."],
    autoStart: true,
  });

  new Typewriter("#story", {
    strings: ["Working on it", "Please wait..."],
    autoStart: true,
  });
}

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

let storyFormElemt = document.querySelector("#ai-form");
storyFormElemt.addEventListener("submit", generateStory);
