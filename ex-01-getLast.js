/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/
function getLast(someArray){
  newArray = []
  for (var i = 0; i < someArray.length; i++){
    newArray = someArray[someArray.length - 1]
  }
  return newArray
}


console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )
