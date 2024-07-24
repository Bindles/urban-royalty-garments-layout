// 2486. Append Characters to String to Make Subsequence
s = "coaching"; t = "coding"

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    tIndex = 0;
    for (schar of s) {
        console.log(schar)
        if (schar == t[tIndex]) {
            tIndex += 1
        }
    }
    return t.length - tIndex
};
console.log(appendCharacters(s,t))

var appendCharacters = function(s, t) {
    tIndex = 0;
    for (sIndex in s) {
        console.log(sIndex)
        if (s[sIndex] == t[tIndex]) {
            tIndex += 1
        }
    }
    return t.length - tIndex
};
console.log(appendCharacters(s,t))

var appendCharacters = function(s, t) {
    tIndex = 0;
    Array.from(s).forEach((schar, sIndex) =>  {
        console.log(schar)
        if (s[sIndex] == t[tIndex]) {
            tIndex += 1
        }
    })
    return t.length - tIndex
};
console.log(appendCharacters(s,t))


const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

pets.forEach(pet => console.log(pet.includes('at')))

pets.forEach(pet => console.log(`hi + ${pet.includes('at')}`))


const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

var selected = array.filter(elem => elem === 'a')
console.log(selected)
selected.forEach((sel, index) => console.log(array.indexOf(sel, index)))
console.log(array.filter(elem => elem === 'a').map(m => array.indexOf(m)))


var selected = array.filter((elem, ind) => ind === 1)
console.log(selected)

console.log(array.indexOf('a', 2))

//arr1 = [1,3,7,9,11];
arr1 = [2,4,8,10,12];
console.log(arr1.filter(x => x > 7));

var arr1 = [2,4,8,10,12];
        
console.log(arr1.filter(x => x>7).map(m => arr1.indexOf(m)))

console.log( array.filter(elem => elem === 'a').map(m => array.indexOf(m)) )

var arrayz=[2,3,1,2,7,7,8,2]
console.log( arrayz.filter(elem => elem > 5).map(m => arrayz.indexOf(m)) )

console.log('arrayz')

var arrayz=[2,3,1,2,7,7,8,2]
console.log( 
    arrayz.reduce((acc, elem, i) => (elem >= 7 && acc.push(i), acc), []) 
    )

    var arrayz=[2,3,1,2,7,7,8,2]
    var red = arrayz.reduce((acc, elem, i) => (elem >= 7 && acc.push(i), acc), []) 
    console.log(red)

const arrz1 = [1,3,7,9,11];
const arrz2 = [2,4,8,10,12];

const filter = arr => arr.filter(x => x > 7).map(x => arr.indexOf(x));

console.log(filter(arrz1))
console.log(filter(arrz2))

const filter2 = arr => arr.reduce((acc, x, i) => (x > 7 && acc.push(i), acc), []);
console.log(filter2(arrz1))
console.log(filter2(arrz2))


// JS MAP_BY_INDEX
// get index of a's
var aArr = ["a", "b", "a", "c", "a", "d"];

aIndices = aArr.reduce((acc, elem, i) => (elem === 'a' && acc.push(i), acc), [])
console.log(aIndices)

// get index of nums > 3

numArr = [1,2,2,4,4,4,6,6,9]
numIndices = numArr.reduce((acc, elem, i) => (elem > 3 && acc.push(i), acc), [])
console.log(numIndices)

evenArr = [1,2,3,4,5,6,7,8]
evenIndices = evenArr.reduce((acc, elem, i) => (elem % 2 == 0 && acc.push(i), acc), [])
console.log(evenIndices)



// get index of evens

