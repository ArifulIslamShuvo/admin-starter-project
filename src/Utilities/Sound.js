

// export function playSound() {
//   new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3').play()
// }


const audioObj = new Audio()
audioObj.src = 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3'
audioObj.loop = true

export function playSound() {
  audioObj.play()
}

export function pauseSound() {
  audioObj.pause()
}

