const imageId = 'rotating-earth-1.gif';

const req = new XMLHttpRequest();
req.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=ylgtDPIaVo0tiEl0ndkEOiD2ePfDEcwrf1QOGPRS');

req.onload = function () {
  const data = JSON.parse(this.responseText);
  const imageUrl = data.hdurl;

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

  const button = document.querySelector('.start-button');

if (button) {
  button.addEventListener('click', () => {
    window.location.href = 'https://dallascowboys.com';
  });
} else {
  console.error('Element with class "start-button" not found');
}

};
req.send();