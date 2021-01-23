const { list } = require('../bot')

module.exports = {
  name: 'show',
  usage: '',
  description: 'Show the current items on the list.',
  execute(message, args) {
    message.reply(
      `The following item(s) are on the list: \n${list.join('\n')} `
    )
  },
}
