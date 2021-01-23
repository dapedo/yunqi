const { list } = require('../bot')

module.exports = {
  name: 'clear',
  usage: '',
  description: 'Clears the list.',
  execute(message, args) {
    list.splice(0, list.length)
    message.reply('The list is now empty')
  },
}
