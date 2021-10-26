function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function exercise1() {
    let trs = Array.from(document.querySelectorAll(".block-table-colors table tbody tr"));
    let testBlock = document.querySelector(".block-test");
    trs.forEach(td => {
       td.addEventListener("click", (e) => {
           testBlock.style.color = e.target.style.backgroundColor;
       });

        td.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            testBlock.style.backgroundColor = e.target.style.backgroundColor;
            let r = e.target.style.backgroundColor.slice(4, -1).split(', ')[0];
            let g = e.target.style.backgroundColor.slice(4, -1).split(', ')[1];
            let b = e.target.style.backgroundColor.slice(4, -1).split(', ')[2];

            alert(`Цвет: ${rgbToHex(parseInt(r), parseInt(g), parseInt(b)).toUpperCase()}`);
        });
    });
}

exercise1();