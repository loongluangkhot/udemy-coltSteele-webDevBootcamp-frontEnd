// function isEven(num) {
//   if (num % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

function isEven(num) {
  return (num % 2 === 0)
}

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return (num * factorial(num - 1))
  }
}

function kebabToSnake(kebabStr) {
  return (kebabStr.replace(/-/g,"_"))
}