// const { EventEmitter } = require('events')
// const ev = new EventEmitter()

// once ouvir uma unica vez
// ev.once('saySomething', message => {
//   console.log('Eu ouvi você', message)
// })

// on ouvi sempre
// ev.on('saySomething', message => {
//   console.log('Eu ouvi você', message)
// })

// ev.emit('saySomething', 'Enzo')
// ev.emit('saySomething', 'Enzo')

// const { inherits } = require('util')
// const { EventEmitter } = require('events')

// function Character(name) {
//   this.name = name
// }

// // o inherits ta passando EventEmitter para Character *
// inherits(Character, EventEmitter)

// const chapolin = new Character('Chapolin')
// chapolin.on('help', () =>
//   console.log(`${chapolin.name} i deu a hora do chaves, tenho que ir lá!
//   não sei com julius consegue, ter 2 empregos ta foda!`)
// )

// console.log('OH! E agora, quem poderá me defender?')
// chapolin.emit('help')
