const image = document.getElementById("pic")

pic.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    image.src = "./napoli.jpg"
  } else {
    audio.pause()
    image.src = "./nyan.png"
  }
})

// window.onbeforeunload = () => {
//   return true
// }