let rectangle = new Rectangle(10, 10,200,100);



rectangle.render( "#000000")

function getCanvas() {
    let canvas = document.getElementById("myCanvas");
    return canvas.getContext("2d");
}
