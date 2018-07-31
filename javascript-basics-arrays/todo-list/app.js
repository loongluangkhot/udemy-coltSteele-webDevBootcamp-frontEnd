window.setTimeout(function() {
  var response = prompt("What would you like to do?")
  var todos = []

  while (response !== "quit") {
    if (response === "new") {
      var toAdd = prompt("What todo do you want to add?")
      todos.push(toAdd)
    } else if (response === "list") {
      console.log("*******************")
      todos.forEach(function(todo,i) {
        console.log(`${i}: ${todo}`)
      })
      console.log("*******************")
    } else if (response === "del") {
      var toDel = prompt("Which index do you want to delete?")
      todos.splice(toDel,1)
    }
    response = prompt("What would you like to do?")
  }

  console.log("QUIT")
}, 100)

