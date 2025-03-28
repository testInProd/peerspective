const imageId = 'rotating-earth-1.gif';

const req = new XMLHttpRequest();
req.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=ylgtDPIaVo0tiEl0ndkEOiD2ePfDEcwrf1QOGPRS');

req.onload = function () {
  const data = JSON.parse(this.responseText);
  const imageUrl = data.hdurl == null ? data.url : data.hdurl;


  if (data.media_type === 'video') {
    const iframe = document.createElement('iframe');
    iframe.src = imageUrl + '&autoplay=1&mute=1';
    iframe.frameBorder = '0';
    iframe.allowFullScreen = true;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.zIndex = '-1';

    document.body.appendChild(iframe);

    const styles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    };

    // Object.assign(video.style, styles);
  } else {
    document.body.style.backgroundImage = `url(${imageUrl}), url(${imageId})`;
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
  }

  const button = document.querySelector('.start-button');

  if (button) {
    button.addEventListener('click', () => {
      // Create a popup container
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.style.position = 'fixed';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.width = '800px';
      popup.style.height = '300px';
      popup.style.background = '#fff';
      popup.style.border = '1px solid #ddd';
      popup.style.padding = '20px';
      popup.style.borderRadius = '10px';
      popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      popup.style.display = 'flex';
      document.body.appendChild(popup);

      // Create a form to collect product information
      const form = document.createElement('form');
      form.classList.add('form');
      form.style.width = '50%';
      form.style.padding = '20px';
      popup.appendChild(form);

      // Create input fields for product information
      const inputs = [
        { label: 'Title', name: 'name' },
        { label: 'Description', name: 'description' },
        { label: 'Price', name: 'price' },
      ];

      inputs.forEach((input) => {
        const label = document.createElement('label');
        label.textContent = input.label;
        label.style.display = 'block';
        label.style.marginBottom = '10px';
        form.appendChild(label);

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = input.name;
        inputField.style.width = '100%';
        inputField.style.height = '30px';
        inputField.style.marginBottom = '20px';
        inputField.style.padding = '10px';
        inputField.style.border = '1px solid #ccc';
        form.appendChild(inputField);
      });

      // Create a submit button
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Create';
      submitButton.style.width = '100%';
      submitButton.style.height = '40px';
      submitButton.style.background = '#4CAF50';
      submitButton.style.color = '#fff';
      submitButton.style.padding = '10px';
      submitButton.style.border = 'none';
      submitButton.style.borderRadius = '5px';
      submitButton.style.cursor = 'pointer';
      form.appendChild(submitButton);

      // Create a baseball card container
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '50%';
      card.style.padding = '20px';
      card.style.border = '1px solid #ddd';
      card.style.borderRadius = '10px';
      card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      card.style.marginLeft = '20px';
      popup.appendChild(card);

      let priceSample = (Math.floor(Math.random() * 100));

      // Style the card like a baseball card
      card.innerHTML = `
  <h2 id="card-name"></h2>
  <p id="card-description"></p>
  <p id="card-price"></p>
  <div id="image-container">
  <img id="uploaded-image" style="width: 80%; height: 80%; object-fit: cover;">
  <input type="file" id="card-image" accept="image/*">
  </div>
`;

      // Update the card with input data
      form.addEventListener('input', () => {
        const name = form.querySelector('input[name="name"]').value;
        const description = form.querySelector('input[name="description"]').value;
        const price = form.querySelector('input[name="price"]').value;

        card.querySelector('#card-name').textContent = name;
        card.querySelector('#card-description').textContent = description;
        card.querySelector('#card-price').textContent = price;
      });

      // Handle image upload
      const imageInput = card.querySelector('#card-image');
      imageInput.addEventListener('change', (e) => {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const uploadedImage = card.querySelector('#uploaded-image');
          uploadedImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      });

      // Remove the popup and card when submit is clicked
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const description = form.querySelector('input[name="description"]').value;
        const price = form.querySelector('input[name="price"]').value;
        const image = card.querySelector('#uploaded-image').src;
      
        // Create a card object
        const cardData = {
          name,
          description,
          price,
          image,
        };
      
        // Store the card data in local storage
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
          const cards = JSON.parse(storedCards);
          cards.push(cardData);
          localStorage.setItem('cards', JSON.stringify(cards));
        } else {
          localStorage.setItem('cards', JSON.stringify([cardData]));
        }
      
        // Remove the popup
        popup.remove();
      
        // Redirect to profile page
        window.location.href = 'profile.html';
      });
    });
  } else {
    console.error('Element with class "start-button" not found');
  }

};
req.send();