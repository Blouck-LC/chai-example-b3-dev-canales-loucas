class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(lengthRight,lengthLeft,lengthBase) {
        this.lengthRight = lengthRight;
        this.lengthLeft = lengthLeft;
        this.lengthBase = lengthBase;
    }

    getSideLengthRight() {
        return this.lengthRight;
    }
    getSideLengthLeft() {
        return this.lengthLeft;
    }
    getSideLengthBase() { 
        return this.lengthBase;
    }

    getTypeOfTriangle(){
        if (this.lengthRight == this.lengthLeft && this.lengthLeft == this.lengthBase && this.lengthBase == this.lengthRight){
            return "Equilateral"
        }else if (this.lengthLeft === this.lengthRight || this.lengthRight === this.lengthBase || this.lengthLeft === this.lengthBase) {
            return "Isosceles"
        }else {
            return "Triangle_quelconque"
        }
    }

    getSurfaceAreaT(){
        if (this.getTypeOfTriangle() == "Equilateral"){
            return Math.round((Math.sqrt(3)/4*Math.pow(this.lengthBase, 2))*100)/100
        }
    }
}

class Cercle {
    constructor(rayon){
        this.rayon = rayon;
    }

    getDiametre(){
        return (2*this.rayon)
    }   

    getPerimetre() {
        return (2*this.rayon);
    }

    getSurface() {
        return (Math.round(Math.PI*Math.pow(this.rayon,2)));
    }

    getAirSphere() {
        return(Math.round(4*Math.PI*Math.pow(this.rayon,2)));
    }
}

module.exports = {
    Triangle:Triangle,
    Cube:Cube,
    Cercle:Cercle
}