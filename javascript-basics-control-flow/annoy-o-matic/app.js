// var reply = prompt("Are we there yet?")

// while (reply !== "yes" && reply !== "yeah") {
//   reply = prompt("Are we there yet?")
// }

// alert("Yay! We made it!")

// version 2

var reply = prompt("Are we there yet?")

while (reply.indexOf("yes") === -1) {
  reply = prompt("Are we there yet?")
}

alert("Yay! We made it!")