import "bootstrap";
import "./style.css";

const suits = ["♦", "♥", "♠", "♣"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "K",
  "Q",
  "A",
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getSuitColor(suit) {
  if (suit === "♦" || suit === "♥") {
    return "red";
  }
  return "black";
}

function generateOneCard(card) {
  const suit = randomItem(suits);
  const rank = randomItem(ranks);

  const rankTop = card.querySelector(".rankTop");
  const suitTop = card.querySelector(".suitTop");
  const rankCenter = card.querySelector(".rankCenter");
  const rankBottom = card.querySelector(".rankBottom");
  const suitBottom = card.querySelector(".suitBottom");

  // Texto
  rankTop.textContent = rank;
  rankCenter.textContent = rank;
  rankBottom.textContent = rank;

  suitTop.textContent = suit;
  suitBottom.textContent = suit;

  // 🎨 Color solo para los palos
  const suitColor = getSuitColor(suit);

  suitTop.style.color = suitColor;
  suitBottom.style.color = suitColor;

  // 🖤 El número siempre negro
  rankTop.style.color = "black";
  rankCenter.style.color = "black";
  rankBottom.style.color = "black";
}

function generateAllCards() {
  const cards = document.querySelectorAll(".poker-card");
  cards.forEach(generateOneCard);
}

window.onload = function () {
  generateAllCards();

  const button = document.getElementById("generateBtn");
  button.addEventListener("click", generateAllCards);
};
