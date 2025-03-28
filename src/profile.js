// profile.js
const profileCards = document.getElementById('profile-cards');
const storedCards = localStorage.getItem('cards');
if (storedCards) {
  const cards = JSON.parse(storedCards);
  cards.forEach((card) => {
    const newCard = document.createElement('div');
    newCard.innerHTML = `
      <h2>${card.name}</h2>
      <p>${card.description}</p>
      <p>${card.price}</p>
      <img src="${card.image}" alt="${card.name}">
    `;
    profileCards.appendChild(newCard);
  });
}