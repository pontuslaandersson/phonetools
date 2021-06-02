const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const phonebook = ['ace', 'clocks', 'fancy', 'gneiss', 'holy', 'mordaza', 'elvi']
const phonebookIds = ['848939756184535040', '848939058306351124', '848938944720011264', '848939192209113138', '848939616017973258', '848939377248829470', '849247932325822464']

/*var phonebook = [
  {}
]*/

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('/help')) {
    msg.channel.send("* Send a message to a friend's commlink by typing */sendmessage* [name] [message]\n* See phonebook by typing */phonebook*");
  }
  if (msg.content.startsWith('/phonebook')) {
    msg.channel.send("Numbers in phonebook")
    var directory = phonebook.join("\n")
    msg.channel.send(directory)
  }
  if (msg.content.startsWith('/sendmessage')) {
    var str = msg.content.substr(13, msg.content.length)
    var split = msg.content.split(" ")
    if (split[1].toLowerCase() === "unknown") {
      split.splice(0, 2)
      var message = split.join(" ")
      const channel = client.channels.cache.get('849248757496938506')
      channel.send(`Incoming message from ${msg.channel.toString()}:`)
      channel.send(message)
    }
    if (split[1].toLowerCase() === "test") {
      split.splice(0, 2)
      var message = split.join(" ")
      const channel = client.channels.cache.get('849234409038675999')
      channel.send(`Incoming message from ${msg.channel.toString()}:`)
      channel.send(message)
    } else {
      var dest = phonebook.indexOf(split[1].toLowerCase())
      console.log(dest)
      if (dest !== -1) {
        split.splice(0, 2)
        var message = split.join(" ")
        console.log(message)
        const channel = client.channels.cache.get(phonebookIds[dest])
        /*if (dest === 1){
          var channel = client.channels.cache.get('848939058306351124')
        }
        if (dest === 2){
          var channel = client.channels.cache.get('848938944720011264')
        }
        if (dest === 3){
          var channel = client.channels.cache.get('848939192209113138')
        }
        if (dest === 4){
          var channel = client.channels.cache.get('848939616017973258')
        }
        if (dest === 5){
          var channel = client.channels.cache.get('848939377248829470')
        }
        if (dest === 6){
          var channel = client.channels.cache.get('849234409038675999')
        }*/
        //const channel = client.channels.cache.get('849234409038675999')
        //const user = client.user.cache.get('427533319136215041')
      
        channel.send(`Incoming message from ${msg.channel.toString()}:`)
        channel.send(message)
      }
    //msg.reply(`Message sent to ${str}`) 427533319136215041
    }
    //console.log('Message data:')
  }
});

client.login(process.env.TOKEN);

/*


*/