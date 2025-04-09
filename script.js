const paragraphs = [
  "Caithlyn, are you sure you wanted to see this message for you?",
  "Because… here it comes!",
"Congratulations on your incredible achievement! Your hard work, dedication, and perseverance have clearly paid off, and it's truly inspiring to see your efforts come to.","You've shown what’s possible when passion meets persistence, and this success is a well-deserved reflection of the time and energy you've invested.","Keep doing what you're doing—your commitment is making a real impact, and there's no doubt even greater accomplishments lie ahead. Remember, this milestone is just the beginning of an exciting journey filled with new opportunities, growth, and continued success. Stay focused, stay driven, and continue reaching for your goals—you’re well on your way to achieving even more.",
  "By: Mark 😁"
];

const messageBox = document.getElementById('messageBox');
let pIndex = 0;

function typeText(text, cb) {
  let i = 0;
  messageBox.innerHTML = "";  // Clear previous paragraph
  const span = document.createElement("span");
  messageBox.appendChild(span);

  const interval = setInterval(() => {
    span.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      setTimeout(cb, 1000); // Wait 1 second before next
    }
  }, 40);
}

function showParagraphs() {
  if (pIndex < paragraphs.length) {
    typeText(paragraphs[pIndex], showParagraphs);
    pIndex++;
  } else {
    setTimeout(() => {
      window.location.href = "about:blank"; // Fallback "close"
    }, 3000);
  }
}

showParagraphs();