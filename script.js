// 1. SEARCH BOX
// When you type a word, only the matching providers stay on the screen.

const searchBox = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("input", function () {
  const word = searchBox.value.toLowerCase();

  for (let i = 0; i < cards.length; i++) {
    const cardText = cards[i].textContent.toLowerCase();

    if (cardText.includes(word)) {
      cards[i].classList.remove("hide");   // show the card
    } else {
      cards[i].classList.add("hide");      // hide the card
    }
  }
});


// 2. PICK THE PROVIDER
// When you click "Request this provider",
// that provider is already selected in the form.

const buttons = document.querySelectorAll("[data-provider]");
const dropdown = document.querySelector('select[name="provider"]');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    dropdown.value = buttons[i].dataset.provider;
  });
}
