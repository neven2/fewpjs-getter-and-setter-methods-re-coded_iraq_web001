class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }
 get area() {
    return Math.PI * this.radius * this.radius;
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }


 
  set circumference(value){
     this.radius = value/(2*Math.PI)
  }
  set diameter(value){
   this.radius = value/2
}

}