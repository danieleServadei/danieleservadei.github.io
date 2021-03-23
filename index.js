const image = document.getElementById("pic")
const pizza = document.getElementById("pizza")

pic.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    image.src = "./napoli.jpg"
    pizza.style.visibility = "visible"
  } else {
    audio.pause()
    image.src = "./nyan.png"
    pizza.style.visibility = "hidden"
  }
})

window.onbeforeunload = () => {
  return true
}