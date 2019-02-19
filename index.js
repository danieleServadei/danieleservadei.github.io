const promise = document.querySelector('audio').play();
if (promise !== undefined) {
  promise.then(_ => {
    // spin started
  }).catch(error => {
    pic.addEventListener('click', () => {
      audio.play();
    });
  });
}