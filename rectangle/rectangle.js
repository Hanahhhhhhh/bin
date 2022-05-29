class Rectangle {
    constructor(x,y,width, height) {
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    render(color) {
        let canvas = document.getElementById("myCanvas");

        console.log(canvas);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

}