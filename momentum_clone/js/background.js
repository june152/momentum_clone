const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let img_num = Math.floor(Math.random() * imgs.length);

const bgImage = document.createElement("img");
bgImage.id = "bgImage";

bgImage.src = `/momentum_clone/img/${imgs[img_num]}`;

document.body.appendChild(bgImage);
