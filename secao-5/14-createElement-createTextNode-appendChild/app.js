const result = document.querySelector('#result');

const bodyDiv = document.createElement('div');
// bodydiv.style.width = '50%';
bodyDiv.style.height = '50%';
bodyDiv.style.backgroundColor = 'black';

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
container.appendChild(bodyDiv);
document.body.appendChild(container);