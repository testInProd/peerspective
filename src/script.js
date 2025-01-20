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

};
req.send();