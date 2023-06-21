let link = document.getElementsByClassName("link");
let currentValue = 1;

function activeLink() {
  for (item of link) {
    item.classList.remove("active");
  }
  event.target.classList.add("active");
  currentValue = event.target.value;
}

function backBtn() {
  if (currentValue > 1) {
    for (item of link) {
      item.classList.remove("active");
    }
    currentValue--;
    link[currentValue - 1].classList.add("active");
  }
}

function nextBtn() {
  if (currentValue < 5) {
    for (item of link) {
      item.classList.remove("active");
    }
    currentValue++;
    link[currentValue - 1].classList.add("active");
  }
}

const formComment = document.getElementById("form-comment");
const formCommentName = document.getElementById("form-comment-name")
const formCommentEmail = document.getElementById("form-comment-email")
const formCommentText = document.getElementById("form-comment-text")

formComment.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(`${formCommentName.value} - ${formCommentEmail.value}

${formCommentText.value}`)
});
