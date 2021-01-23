const { list } = require('../bot')

module.exports = {
  name: 'raffle',
  usage: '',
  description: 'Chose a random item of the list.',
  execute(message, args) {
    let randomItem = list[Math.floor(Math.random() * list.length)]

    message.reply(`The drawing result waaaas: ${randomItem}`)
  },
}
