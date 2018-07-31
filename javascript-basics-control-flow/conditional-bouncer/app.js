var age = Number(prompt("How old are you?"))

if (age < 18) {
  console.log("Sorry, you can't enter the venue.")
} else if (age < 21) {
  console.log("You can enter the venue, but you cannot drink.")
} else {
  console.log("Come on in. You can drink.")
}

if (age < 0) {
  console.log("ERROR: Age can't be a negative number.")
}
if (age === 21) {
  console.log("Happy 21st birthday!!!")
}
if (age % 2 === 1) {
  console.log("Your age is odd!")
}
if (Number.isInteger(Math.sqrt(age))) {
  console.log("Perfect square!")
}