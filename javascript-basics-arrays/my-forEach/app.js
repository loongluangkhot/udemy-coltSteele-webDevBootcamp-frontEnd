// function my_forEach (arr, func) {
//   for (var i = 0; i < arr.length; i++) {
//     func(arr[i])
//   }
// }

Array.prototype.my_forEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    if (func.length === 0) {
      func()
    } else if (func.length === 1) {
      func(this[i])
    } else if (func.length === 2) {
      func(this[i], i)
    } else if (func.length === 3) {
      func(this[i], i, this)
    }
  }
  if (func.length > 3) {
    console.log("This method accepts 1, 2, or 3 arguments. Please try again.")
  }
}