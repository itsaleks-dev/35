import './styles/main.scss';
import row from './assets/images/row.png';

const container :HTMLElement|nill = document.getElementById( elementid: 'image-container');

if (container) {
    const img :HTMLImageElement = document.createElement( tagName: 'img');
    img.src = row;
    img.alt = 'row example';
    container.appendChild(img);

    const message :HTMLHeadingElement = document.createElement( tagName: 'h1');
    message.textContent = 'Hello Webpack and TypeScript';
    container.appendChild(message);
}