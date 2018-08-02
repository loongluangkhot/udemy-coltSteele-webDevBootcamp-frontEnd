// try to use jQuery as much as possible

// add button: upon clicking, slide down input field
$(".add-btn").on("click", function(e) {
  e.stopPropagation()
  $("input").fadeToggle(200)
})

// when todo is clicked on, strike-off; remove line-thru when struck-off item is clicked
$(".todo-list").on("click", ".todo", function(e) {
  e.stopPropagation()
  $(this).children("span").toggleClass("struck-off")
})

// delete button slides from left when todo item is hovered over
// $(".todo-list").on("mouseenter mouseleave", ".todo", function() {
//   $(this).children(".del-btn").animate({
//     width: "toggle"
//   }, 100)
// })

// remove todo item when delete button is clicked
$(".todo-list").on("click", ".del-btn", function(e) {
  e.stopPropagation()
  $(this).parent().fadeOut(300, function() {
    $(this).remove()
  })
  
})

// when [enter] key is pressed in input field, add todo item to top of list
$("input").keypress(function(e) {
  if (e.which === 13) {
    let newTodo = $(this).val()
    $(this).val("")
    $(".todo-list").append($(`<li class='row todo'><button class='del-btn'><i class='far fa-trash-alt'></i></button><span>${newTodo}</span></li>`));
  }
})