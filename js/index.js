const image = document.getElementById("pic")
const pizza = document.getElementById("pizza")

pic.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    image.src = "./images/napoli.jpg"
    pizza.style.visibility = "visible"
  } else {
    audio.pause()
    image.src = "./images/nyan.png"
    pizza.style.visibility = "hidden"
  }
})

window.onbeforeunload = () => {
  return true
}