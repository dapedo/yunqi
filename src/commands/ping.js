// Simple command learned in the Discord.js guide

module.exports = {
  name: 'ping',
  usage: '',
  description: 'Pongs your ping.',
  execute(message, args) {
    message.channel.send('Pong.')
  },
}
