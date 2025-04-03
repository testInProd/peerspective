const profileCards = document.getElementById('profile-cards');
const storedCards = localStorage.getItem('cards');
if (storedCards) {
  const cards = JSON.parse(storedCards);
  cards.forEach((card) => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
      <h2>${card.name}</h2>
      <img src="${card.image}" alt="${card.name}">
      <p class="description">${card.description}</p>
      <p class="price">$${card.price}</p>
    `;
    profileCards.appendChild(newCard);
  });
}