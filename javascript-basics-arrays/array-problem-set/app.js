function printReverse(myArray) {
  var reverseArray = []
  myArray.forEach(function(elem) {
    reverseArray.unshift(elem)
  })
  console.log(reverseArray)
}

function isUniform(myArray) {
  var uniformity = true
  var firstElem = myArray.shift()
  myArray.forEach(function(elem) {
    if (elem !== firstElem) {
      uniformity = false
    }
  })
  return uniformity
}

function sumArray(myArray) {
  var sum = 0
  myArray.forEach(function(num) {
    sum += num
  })
  return sum
}

function max(myArray) {
  var maxNum = myArray.shift()
  myArray.forEach(function(num) {
    if (num > maxNum) {
      maxNum = num
    }
  })
  return maxNum
}
