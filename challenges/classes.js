// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(dimensions) {
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboidOne = {
    length: 4,
    width: 5,
    height: 5
};

const cuboid2 = new CuboidMakerClass(cuboidOne);

console.log("Classes results (Note: I had to change 'cuboid' to 'cuboid2' so that I wouldn't have to comment out work in prototypes.js) below:");
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(cubeDimensions) {
        super(cubeDimensions);
    }

    cubeVolume() {
        if((this.length === this.width) && (this.width === this.height)) {
            return Math.pow(this.length, 3);
        } else {
            return "The object is not a perfect cube. Please try again.";
        }
    }

    cubeSurface() {
        if((this.length === this.width) && (this.width === this.height)) {
            return 6 * Math.pow(this.length, 2);
        } else {
            return "One or more of the surfaces of your alleged cube is off. Please try again.";
        }
    }
}

const rubiks = {
    length: 9,
    width: 9,
    height: 9
};

const isCube = new CubeMaker(rubiks);

console.log("Classes Stretch - Cube subclass and methods. I used a value of 9 for l, w, and h");
console.log(isCube.cubeVolume());
console.log(isCube.cubeSurface());