const Discord = require('discord.js');
const Client = new Discord.Client();
const ltocken = process.env.TOCKEN;

require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
		  
Client.on('message', (msg) =>{
if (msg.content === '!>Help') {
  msg.channel.send('!>K');
}
});

Client.on('ready', () => {
    console.log('Bot is Connected');
});


Client.login(ltocken);
