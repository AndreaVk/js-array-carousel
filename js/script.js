const items = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/newyork.jpeg",
    "img/abu.jpg",
    "img/mykonos.jpeg",
    "img/sharm.jpg",
    "img/Barcellona.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];
const title = [
    "NewYork",
    "Abu Dhabi",
    "Mykonos",
    "Sharm el-Sheikh",
    "Barcellona",
];

const text = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    "Lorem ipsum",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    "New York City, in breve New York, in italiano anche Nuova York è una città degli Stati Uniti d'America situata nello stato di New York.",
    "Abu Dhabi, o più correttamente 'Abū Ẓabiyy, è la capitale degli Emirati Arabi Uniti e capitale dell'omonimo emirato.",
    "Mykonos (Μύκονος) o Micono è un'isola greca delle Cicladi, situata nelle vicinanze di Tino, Siro, Paro e Nasso.",
    "Sharm el-Sheikh è una località turistica egiziana posta nella parte meridionale della penisola del Sinai e bagnata dal mar Rosso.",
    "Barcellona è una città della Spagna di 1 664 162 abitanti, capoluogo della Catalogna, una comunità autonoma della parte orientale dello Stato, oltre che dell'omonima provincia e della comarca del Barcelonès: soprannominata Ciutat Comtal o Ciudad Condal (Città dei Conti), è la seconda città della Spagna per numero di abitanti dopo la capitale Madrid.",
];

let itemsContent = "";
let thumbContent = "";
for (let i = 0; i < items.length; i++) {
    itemsContent += `<div class="item">
    <img src="${items[i]}" alt="${title[i]}">
    <div class="description">
        <h2>
            ${title[i]}
        </h2>
        <p>
            ${text[i]}
        </p>
    </div>
</div>`;
    thumbContent += `<div class="thumb">
    <img src="${items[i]}" alt="${title[i]} thumbnail">
</div>`;
}
const itemsContainer = document.querySelector(".img-grande");
itemsContainer.innerHTML = itemsContent;
const thumbContainer = document.querySelector(".thumb-container");
thumbContainer.innerHTML = thumbContent;
let activeItem = 0;
const itemsImg = document.getElementsByClassName("item");
itemsImg[activeItem].classList.add("active");
const thumbImg = document.getElementsByClassName("thumb");
thumbImg[activeItem].classList.add("active");
   // pulsanti
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
next.addEventListener("click", function () {
    if (activeItem < items.length - 1) {
    itemsImg[activeItem].classList.remove("active");
    thumbImg[activeItem].classList.remove("active");
    activeItem++;
    itemsImg[activeItem].classList.add("active");
    thumbImg[activeItem].classList.add("active");
    } else if ((activeItem = items.length - 1)) {
    itemsImg[activeItem].classList.remove("active");
    thumbImg[activeItem].classList.remove("active");
    itemsImg[0].classList.add("active");
    thumbImg[0].classList.add("active");
    activeItem = 0;
    }
});
prev.addEventListener("click", function () {
    if (activeItem > 0) {
    itemsImg[activeItem].classList.remove("active");
    thumbImg[activeItem].classList.remove("active");
    activeItem--;
    itemsImg[activeItem].classList.add("active");
    thumbImg[activeItem].classList.add("active");
    } else if (activeItem == 0) {
    itemsImg[0].classList.remove("active");
    thumbImg[0].classList.remove("active");
    itemsImg[items.length - 1].classList.add("active");
    thumbImg[items.length - 1].classList.add("active");
    activeItem = items.length - 1;
    }
});
