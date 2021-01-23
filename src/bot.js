require("dotenv").config()

const Discord = require('discord.js')
const { prefix } = require('../config.json')
const fs = require('fs')

const client = new Discord.Client()
client.commands = new Discord.Collection()

// List variables
let list = ['oi', 'alou', 'ola', 'aloha']
module.exports = { list }

// Puts all the files in commands in a Array
const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'))

// Loop trough the array and sets the commands into Client
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

client.on('ready', () => {
  console.log('Im online!')
  client.user.setPresence({
    status: 'online',
    activity: { name: 'Being amazing like my maker' },
  })
})

client.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return

  const [cmdName, ...args] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)

  if (!client.commands.has(cmdName)) return

  const command = client.commands.get(cmdName)

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``
    }

    return message.channel.send(reply)
  }

  try {
    command.execute(message, args)
  } catch (error) {
    console.log(error)
    message.reply('There was an error trying to execute that command!')
  }
  console.log(cmdName, args)
})

client.login(process.env.BOT_TOKEN)
