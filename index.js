class JewelryBox extends HTMLImageElement {
    constructor() {
        super();
        this.src = "ground.png";
        this.className = "jewelry-box"

        let isEmpty = true
        this.addEventListener("click", function(e) {
            if (isEmpty) {
                this.src = "jewelry.png";
            } else {
                this.src = "ground.png";
            }
            isEmpty = !isEmpty;
        });
        this.addEventListener('clear', function(e) {
            isEmpty = true;
            this.src = "ground.png"
        })
      };
}

class JewelryBoxRow extends HTMLTableRowElement{
    constructor() {
        super();
        this.insertAdjacentHTML('afterbegin', '\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
            <td><img is="jewelry-box"></td>\
        ');
    }
}

class JewelryBoxTable extends HTMLTableElement {
    constructor() {
        super();
        this.insertAdjacentHTML("afterbegin", '\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
            <tr is="jewelry-box-row">\
        '
        );
    }
}

customElements.define("jewelry-box", JewelryBox, { extends: "img" });
customElements.define("jewelry-box-row", JewelryBoxRow, { extends: "tr" });
customElements.define("jewelry-box-table", JewelryBoxTable, { extends: "table" });

function reset(event) {
    const boxes = document.querySelectorAll('.jewelry-box');
    const clear = new Event('clear')
    boxes.forEach(box => {
        box.dispatchEvent(clear);
    });
};