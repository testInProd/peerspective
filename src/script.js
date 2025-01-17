const req = new XMLHttpRequest();
req.open('GET', 'https://epic.gsfc.nasa.gov/api/natural');
req.onload = function () {
    const data = JSON.parse(this.responseText);
    const imageId = data[0].image;

    const today = new Date(data[0].date);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageId}.png`;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
};
req.send();