class Shape{
    constructor(color) {
        if(new.target == Shape) throw new Error("Abstruct class can't be initiated.")
        this.color = color
    }
    get Color(){
        console.log(this.color);
    }
}

class Rectangle extends Shape{
    constructor(color,width,height) {
        super(color)
        this.width = width
        this.height = height
    }
    set col(b){      // setter
        this.color = b
    }
    get Area(){    // getter
        console.log(this.width * this.height);
    }
}

let rect = new Rectangle("Red",40,50)
// let ab = new Shape("Blue")
// console.log(ab);
// ab.Color
rect.Area   // getter 
rect.Color  // getter

rect.col = "Yellow"   // setter
rect.Color