/**
    We are given an array asteroids of integers representing asteroids in a row.

    For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

    Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
**/

var asteroidCollision = function(asteroids) {
    
    const isLefty = (i) => {
        return (asteroids[i] < 0);
    }

    let i = 1;
    let prev;
    while (i < asteroids.length) {
  
        if (isLefty(i) && !isLefty(i - 1)  && asteroids[i - 1] !== undefined) {
            if (Math.abs(asteroids[i]) > Math.abs(asteroids[i - 1])){
                asteroids = asteroids.slice(0, i - 1).concat(asteroids.slice(i));
                if (asteroids[i - 1] !== undefined) {
                    i--;
                } else {
                    i++;
                }
            } else if (Math.abs(asteroids[i]) === Math.abs(asteroids[i - 1])) {
                asteroids = asteroids.slice(0, i).concat(asteroids.slice(i + 1));
                i--;
                asteroids = asteroids.slice(0, i).concat(asteroids.slice(i + 1));
            } else {
                asteroids = asteroids.slice(0, i).concat(asteroids.slice(i + 1));
            }
        } else {
            i++;
        }
        
    }
    return asteroids;
    
};

console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([-8,8]));
console.log(asteroidCollision([5,10,-5,8,-2,9,9,9,-12]));