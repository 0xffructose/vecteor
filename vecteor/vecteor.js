class Vector2D {
    constructor(x = 0.0 , y = 0.0) {
        this.x = x; this.y = y;
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get normalized() {
        return new Vector2D(this.x / this.magnitude , this.y / this.magnitude);
    }

    get direction() {
        return Math.atan(this.y / this.x);
    }

    add(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2"); 
        this.x += v1.x; this.y += v1.y;
    }

    subtract(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2"); 
        this.x -= v1.x; this.y -= v1.y;
    }

    multiply(value) {
        if (typeof(value) != Number) throw new Error("'value' must be a number");
        this.x *= value; this.y *= value;
    }
    
    divide(value) {
        if (typeof(value) != Number) throw new Error("'value' must be a number");
        this.x /= value; this.y /= value;
    }
    
    angle_as_radians(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2"); 
        return Math.acos(this.dot(v1) / (this.magnitude * v1.magnitude));
    }

    angle_as_degrees(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2"); 
        return Math.acos(this.dot(v1) / (this.magnitude * v1.magnitude)) * 180/Math.PI;
    }

    distance(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2D");
        return Math.sqrt((v1.x - this.x) ** 2 + (v1.y - this.y) ** 2);        
    }

    /*
    reflect(normal) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("Not implemented");
    }
    */

    dot(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2D");
        return this.x * v1.x + this.y * v1.y; 
    }

    static rad_to_deg(rad) {
        return rad*180/Math.PI;
    }

    static deg_to_rad(deg) {
        return deg*Math.PI/180;
    }    
}

/*
class Vector3D {
    constructor(x = 0.0 , y = 0.0 , z = 0.0) {
        this.x = x; this.y = y; this.z = z;
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    get normalized() {
        return new Vector3D(this.x / this.magnitude , this.y / this.magnitude , this.z / this.magnitude);
    }

    get direction() {
        return new Vector3D(Vector3D.rad_to_deg(Math.acos(this.x / this.magnitude)) , Vector3D.rad_to_deg(Math.acos(this.y / this.magnitude)) , Vector3D.rad_to_deg(Math.acos(this.z / this.magnitude)));
    }

    add(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector3D"); 
        this.x += v1.x; this.y += v1.y; this.z += v1.z
    }

    subtract(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector3D"); 
        this.x -= v1.x; this.y -= v1.y; this.z += v1.z;
    }

    multiply(value) {
        if (typeof(value) != Number) throw new Error("'value' must be a number");
        this.x *= value; this.y *= value; this.z *= value;
    }
    
    divide(value) {
        if (typeof(value) != Number) throw new Error("'value' must be a number");
        this.x /= value; this.y /= value; this.z /= value;
    }
    
    angle_as_radians(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector3D"); 
        return Math.acos(this.dot(v1) / (this.magnitude * v1.magnitude));
    }

    angle_as_degrees(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector3D"); 
        return Math.acos(this.dot(v1) / (this.magnitude * v1.magnitude)) * 180/Math.PI;
    }

    distance(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector3D");
        return Math.sqrt((v1.x - this.x) ** 2 + (v1.y - this.y) ** 2 + (v1.z - this.z) ** 2);        
    }


    reflect(normal) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("Not implemented");
    }
    

    dot(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2D");
        return this.x * v1.x + this.y * v1.y + this.z * v1.z; 
    }   
    
    cross(v1) {
        if (v1.__proto__.constructor.name != this.constructor.name) throw new Error("'v1' must be Vector2D");
        return new Vector3D((this.y * v1.z - this.z * v1.y) , (this.z * v1.x - this.x * v1.z) , (this.x * v1.y - this.y * v1.x)); 
    }

    static rad_to_deg(rad) {
        return rad*180/Math.PI;
    }

    static deg_to_rad(deg) {
        return deg*Math.PI/180;
    }    
}   
*/

module.exports = { Vector2D }
