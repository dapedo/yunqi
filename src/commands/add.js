const { list } = require('../bot')

module.exports = {
  name: 'add',
  usage: '<item to add>',
  description: 'Adds an item to the list.',
  execute(message, args) {
    const item = args.join(' ')

    if (item === '') {
      message.reply('You cannot add and empty item.')
      return
    }

    list.push(`${item}`)
    console.log(list)
  },
}
