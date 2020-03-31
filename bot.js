const { token, musicdmp } = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

	message.content=message.content.toLowerCase();
	 
	if(message.member.id === '235088799074484224' || message.member.id === '234395307759108106')
		message.delete();
	
	else if(message.content === "!skip" || message.content === "!pause")
		message.delete();

	else if(message.content.startsWith("!play") || message.content.startsWith("!p"))
		{	
			if(message.member.id === '693810408334688306')
				return;
			
			const musicChannel = message.guild.channels.cache.find(channel => channel.name === "trash-music");	
			musicChannel.send(message);
		    message.delete();	
		}
});



