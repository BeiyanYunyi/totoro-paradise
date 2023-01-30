/** A class to define a vector */
class Vector {
  vectorArray: number[];

  norm: number;

  unitVector: number[];

  constructor(vectorArray: number[]) {
    this.vectorArray = vectorArray;
    this.norm = Math.hypot(...this.vectorArray);
    this.unitVector = this.vectorArray.map((n) => n / this.norm);
  }
}

export default Vector;
