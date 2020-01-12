// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function(total, num) {
      return total + num;
    });
  }



}

class Triangle extends Polygon {
    
    get isVallid(){
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]){
            return true}
        else {
            return false
        }
    }


    }
}

  
