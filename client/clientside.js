const successMessage = document.getElementById("successMessage");
const contactForm = document.getElementById("contactForm");
const messageFail = document.getElementById("messageFail");
const commentForm = document.getElementById("commentForm");
const commentContainer = document.getElementById("commentSection");
const commentBoard = document.getElementById("commentBoard");
const navbar = document.getElementById("mainNav");
const contactNav = document.getElementById("contactNav");


function loadMH370(event){
  commentBoard.style.display = "block";
  fetch('http://127.0.0.1:8090/MH370')
  .then(response => response.text())
  .then(body =>
  document.getElementById('content').innerHTML=body)
}

function loadKLM(event){
  commentBoard.style.display = "block";
  fetch('http://127.0.0.1:8090/KLM')
  .then(response => response.text())
  .then(body =>
  document.getElementById('content').innerHTML=body)
}

function loadTW2UA(event){
  commentBoard.style.display = "block";
  fetch('http://127.0.0.1:8090/TW2UA')
  .then(response => response.text())
  .then(body =>
  document.getElementById('content').innerHTML=body)
}

function loadRandom(event){
  commentBoard.style.display = "block";
  let x = 10;
  while(x>3 || x < 1){
      x = Math.random();
      x*=10;
      x = Math.trunc(x);
  }
  let xs = x.toString()
  let s = "Div" + xs + ".html";
  fetch(s)
  .then(response => response.text())
  .then(htmlContent => {
    document.getElementById('content').innerHTML = htmlContent;
  });
}

function loadContact(event){
  contactNav.style.display = "block";
  mainNav.style.display = "none";
  commentBoard.style.display = "none";
  document.getElementById("contactForm").style.display = "block";
  successMessage.style.display = "none";
  messageFail.style.display = "none";

  fetch('http://127.0.0.1:8090/Contact')
  .then(response => response.text())
  .then(body =>
  document.getElementById('content').innerHTML=body)
}

function loadMain(event){
  contactNav.style.display = "none";
  mainNav.style.display = "block";
  commentBoard.style.display = "none";
  document.getElementById("contactForm").style.display = "none";
  successMessage.style.display = "none";
  messageFail.style.display = "none";
  fetch('http://127.0.0.1:8090/Main')
  .then(response => response.text())
  .then(body =>
  document.getElementById('content').innerHTML=body)
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name);

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    messageFail.style.display = "block";
  }
  else{
    messageFail.style.display = "none";
    successMessage.style.display = "block";
    contactForm.reset();
    contactForm.style.display = "none";
    return false;
  }
});

commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const newComment = document.getElementById("comment").value;

  fetch("http://127.0.0.1:8090/parseComment", {
    method: "POST",
    body: JSON.stringify({newComment}), 
  })
    .then((response) => response.json())
    .then((data) => {
      const commentDiv = document.createElement("div");
      commentDiv.innerHTML = '<div class="card-body"><div class="d-flex flex-start align-items-center"><img class="rounded-circle shadow-1-strong me-3"src="anonymous.jpg" alt="avatar" width="60"height="60" /><div><h6 class="fw-bold text-primary mb-1">You</h6></div></div><div id = text-holder></div></div>';
      commentContainer.appendChild(commentDiv);
      const textContainer = document.getElementById("text-holder");
      const newText = document.createElement("p");
      newText.textContent = newComment;
      textContainer.appendChild(newText);
      commentForm.style.display = "none";
      commentForm.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});

window.addEventListener("offline", () => {
  const errorMessage = document.getElementById("error-message");
  const content = document.getElementById("content");
  errorMessage.style.display = "block";
  content.style.display = "none";
});

window.addEventListener("online", () => {
  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "none";
  const content = document.getElementById("content");
  content.style.display = "block";
});