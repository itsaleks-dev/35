import "./styles/main.scss";
import row from "./assets/images/row.png";

const container = document.getElementById("image-container");

if (container) {
  // Добавляем картинку
  const img = document.createElement("img");
  img.src = row;
  img.alt = "row example";
  container.appendChild(img);

  // Добавляем текст
  const message = document.createElement("h1");
  message.textContent = "Hello Webpack + TypeScript 🚀";
  container.appendChild(message);
}