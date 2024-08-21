//  #2722. Join Two Arrays by ID

// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // create empty map to keep track if existing keys and their indexes
    const map = {};

    // create joinedArr
    const joinedArr = [];

    // loop through each element from arr1
    arr1.forEach((el, i) => {
        // add key to map and keep their index in arr1 as values
        map[el.id] = i;

        // add each element from arr1 to new joinedArr
        joinedArr.push(el);
    });

    // loop through arr2
    arr2.forEach((a2_el) => {
        // if key tracking map already contains the key, update data at that index in joinedArr
        if(map[a2_el.id] !== undefined) {
            // get index of element in joinedArr by id
            const existingIndex = map[a2_el.id];

            // loop through each key of arr2 current element
            for(let key in a2_el) {
                // add/update key/value pair at joinedArr index by arr2 element
                joinedArr[existingIndex][key] = a2_el[key];
            }
        } else {
            // if key tracking map does not contain key, push new element to joinedArr
            joinedArr.push(a2_el);
        }
    });
    // sort joinedArr by id and return new joined arr
    return joinedArr.toSorted((a, b) => a.id - b.id);
};