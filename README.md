# vecteor
Vector is a Javascript based vector library consisting of only 2D vector. 
**(3d vectors coming soon)**

Creating a vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
```
Get the magnitude of vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
var vector_magnitude = vector.magnitude; // -> Number
```
Normalizing the vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
var vector_normalized = vector.normalized; // -> Vector2D
```
# vecteor
Vector is a Javascript based vector library consisting of only 2D vector. 
**(3d vectors coming soon)**

Creating a vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
```
Get the magnitude of vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
var vector_magnitude = vector.magnitude; // -> Number
```
Normalizing the vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
var vector_normalized = vector.normalized; // -> Vector2D
```
Get the direction of vector
```js
const { Vector2D } = require("vecteor");

var vector = new Vector2D( 1 , 1 ); // new Vector2D( x , y );
var vector_direction = vector.direction; // -> Number: It returns the direction of vector as radians
```
