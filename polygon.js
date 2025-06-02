class polygon {
    constructor(name) {
        this.name = name;
    }
    area() {
        throw new Error("area not defined");
    }

    toString() {
        return `${this.name} Area: ${this.area()}`;
    }

}


class rectangle extends polygon {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    toString() {
        return `${super.toString()} (width: ${this.width}, height: ${this.height})`;
    }
}


class square extends rectangle {
    constructor(side) {
    super(side, side);
    this.name = "Square";
  }

  toString() {
    return `${super.toString()} (side: ${this.width})`;
  }

}
class circle extends polygon {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    toString() {
        return `${super.toString()} (radius: ${this.radius})`;
    }

}
class triangle extends polygon {
    constructor(base, height) {
        super("Triangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `${super.toString()} (base: ${this.base}, height: ${this.height})`;
    }

}

const shapes = [
    new rectangle(10, 20),
    new square(15),
    new circle(7),
    new triangle(10, 12),
];
shapes.forEach(shape => console.log(shape.toString()));