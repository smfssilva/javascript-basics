const result = document.querySelector('#result');

const bodyDiv = document.createElement('div');
// bodydiv.style.width = '50%';
bodyDiv.style.height = '50%';
bodyDiv.style.backgroundColor = 'green';

const container = document.createElement('div');

container.style.width = '40vw';
container.style.height = '40vh';
container.style.backgroundColor = 'blue';
container.style.margin = '200px auto';
container.style.color = 'white';
container.style.textAlign = 'center';
container.style.padding = '2rem 0';

const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result)

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'm small heading ${smallHeading.text}`); smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);