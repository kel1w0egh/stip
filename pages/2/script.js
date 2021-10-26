// let blocks = Array.from(document.body.children).filter(value => {
//     if (value.className === "condition-block"
//         || value.className === "results-block"
//         || value.className === "links-block") {
//         return value;
//     }
// });
//
// blocks.forEach(element => {
//     element.children[0].addEventListener("click", (e) => {
//         Array.from(element.children)[1].classList.toggle("hide");
//     });
// });

// Задание №1
function exercise1() {
    let items = document.querySelectorAll(".exercise-1 .vertical-menu .list-item");
    items.forEach(item => {
       item.addEventListener("mouseenter", () => {
         Array.from(item.children).forEach(element => {
            element.classList.add("show-menu");
         });
       });

        item.addEventListener("mouseleave", () => {
            Array.from(item.children).forEach(element => {
                element.classList.remove("show-menu");
            });
        });
    });
}

// Задание №2
function exercise2() {
    let form = document.forms[0];
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let from = parseInt(e.target.from.value) - 1;
        let to = parseInt(e.target.to.value) - 1;

        let imageContainer = document.querySelector(".images");
        let images = Array.from(document.querySelectorAll(".images img"));

        let imageFrom = images[from];
        let imageTo = images[to];

        images[from] = imageTo;
        images[to] = imageFrom;

        imageContainer.innerHTML = "";
        images.forEach(item => {
            imageContainer.innerHTML += item.outerHTML;
        })
    });
}

exercise1();
exercise2();