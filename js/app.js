const $ = document.querySelectorAll.bind(document);

const items = $(".item");
const contents = $(".content");
const icons = $(".icon");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    contents[i].classList.toggle("d-none");
    icons[i].classList.toggle("fa-plus");
    icons[i].classList.toggle("fa-minus");
  })
};