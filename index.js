// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }
}

a = new Polygon([1, 2, 1, 2]);
console.log(a.countSides());
