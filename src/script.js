const req = new XMLHttpRequest();
req.open('GET', 'https://epic.gsfc.nasa.gov/api/natural');
req.onload = function () {
    const data = JSON.parse(this.responseText);
    const randomIndex = Math.floor(Math.random() * data.length);
    const imageId = data[randomIndex].image;    

    const today = new Date(data[0].date);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageId}.png`;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundColor = 'black';
    document.body.style.backgroundBlendMode = 'screen';
    document.documentElement.style.height = '100%';
    document.documentElement.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';  

    document.body.addEventListener('click', function() {
        const anchor = document.createElement('a');
        anchor.href = 'src/create.html';
        anchor.click();    });

};
req.send();


setTimeout(function() {
  
    fetch('https://qapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.quote;
      const author = data.author;
  
      const quoteParagraph = document.createElement('p');
      quoteParagraph.classList.add('quote-paragraph');
      quoteParagraph.style.color = 'white';
      quoteParagraph.style.position = 'absolute';
      quoteParagraph.style.bottom = '40px';
      quoteParagraph.style.left = '50%';
      quoteParagraph.style.transform = 'translateX(-50%)';
      quoteParagraph.style.textAlign = 'center';
  
      const authorParagraph = document.createElement('p');
      authorParagraph.classList.add('author-paragraph');
      authorParagraph.style.color = 'white';
      authorParagraph.style.position = 'absolute';
      authorParagraph.style.bottom = '10px';
      authorParagraph.style.left = '50%';
      authorParagraph.style.transform = 'translateX(-50%)';
      authorParagraph.style.textAlign = 'center';
  
      document.body.appendChild(quoteParagraph);
      document.body.appendChild(authorParagraph);
  
      let quoteIndex = 0;
      let authorIndex = 0;
  
      function typeQuote() {
        if (quoteIndex < quote.length) {
          quoteParagraph.textContent += quote[quoteIndex];
          quoteIndex++;
          setTimeout(typeQuote, 50); // adjust the speed here
        } else {
          setTimeout(typeAuthor,200); // start typing author when quote is done
        }
      }
  
      function typeAuthor() {
        if (authorIndex < author.length) {
          if (authorIndex == 0) {
            authorParagraph.textContent += '- ';
          }
          authorParagraph.textContent += author[authorIndex];
          authorIndex++;
          setTimeout(typeAuthor, 50); // adjust the speed here
        }
      }
  
      typeQuote();
    })
    .catch(error => console.error(error));


}, 5000);