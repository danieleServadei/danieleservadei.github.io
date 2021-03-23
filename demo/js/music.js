const promise = document.querySelector('audio').play()

if (promise !== undefined) {
  promise.then(_ => {
    // spin started
  }).catch(error => {
    console.log(error)
    heading.addEventListener('click', () => {
      audio.play()
    })
  })
}

window.onbeforeunload = () => {
  return true
}