const imageId = 'rotating-earth-1.gif';

const backgroundImage = new Image();
backgroundImage.src = `./assets/${imageId}`;
backgroundImage.onload = function() {
    document.body.style.backgroundImage = `url(${backgroundImage.src})`;
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