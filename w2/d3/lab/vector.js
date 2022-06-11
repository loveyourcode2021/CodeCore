class Vector {
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }

    plus(v2){
        let x = this.x + v2.x
        let y = this.y + v2.y
        let z = this.z + v2.z
        console.log(`${x} ${y} ${z}`)
        return new Vector(x,y,z)
    }
    minus(v2){
        let x = this.x - v2.x
        let y = this.y - v2.y
        let z = this.z - v2.z
        console.log(`${x} ${y} ${z}`)
        return new Vector(x,y,z)
    }
    magnitude(){
        var result =  Math.sqrt(this.x * this.x + this.y * this.y +(this.z * this.z) );
        console.log(`${result}`)
        return result
    }
}




let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);


v1.plus(v2) // returns Vector {x: 5, y: 6, z: 2}
v2.plus(v1) // returns Vector {x: 5, y: 6, z: 2}


v1.minus(v2) // returns Vector {x: 3, y: 2, z: -2}
v2.minus(v1) // returns Vector {x: -3, y: -2, z: 2}


v1.magnitude() // returns 5.656854249492381
v2.magnitude() // returns 3