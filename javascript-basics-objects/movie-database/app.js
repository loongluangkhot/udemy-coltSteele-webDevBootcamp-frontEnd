var movieDB = [
  {
    title: "Up",
    rating: "5",
    hasWatched: true
  },
  {
    title: "MI: Fallout",
    rating: "5",
    hasWatched: false
  },
  {
    title: "Ant-man & the Wasp",
    rating: "4.5",
    hasWatched: true
  }
]

movieDB.forEach(function(movie) {
  if (movie.hasWatched) {
    console.log(`You have watched "${movie.title}" - ${movie.rating} stars`)
  } else {
    console.log(`You have not seen "${movie.title}" - ${movie.rating} stars`)
  }
})