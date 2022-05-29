let productManager = new bookManager();
productManager.showListBook();


function save() {
    let ms = document.getElementById('ms').value;
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let sl = document.getElementById('sl').value;

    bookManager.add(ms, name, year, sl);
}

function deleteProduct(index) {
    if (confirm('Are you sure?')) {
        productManager.destroy(index);
    }
}