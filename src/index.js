function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let apiKey = "9ab043d0b59dfdb1606tfebb0401oaab";
  let prompt = document.querySelector("#prompt").value;
  let context =
    "Write in less than 400 words a SHORT story or tale about, creative and happy ending for kids.";
  // Allow multiple prompts separated by commas
  if (prompt.includes(",")) {
    const prompts = prompt
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);
    prompt = prompts.join(" and ");
  }
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayStory);

  new Typewriter("#loading", {
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
