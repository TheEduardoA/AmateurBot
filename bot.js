const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";

client.on('ready', () => {
    console.log(`Estoy listo!`);
 });
 
 client.on('message', (message) => {
   if(message.content.startsWith('Amateur')) {
     message.channel.send(`Rock Me Amadeus!!`);
   }else 
   if(message.content.startsWith(prefix + 'hola')) { 
    message.channel.send(`Hola que tal?`);
}else 
if(message.content.startsWith(prefix + 'rook')) { 
 message.channel.send(`TODOS USEN SUS CHALECOS! La Abuela Rook los quiere`);
}else 
if(message.content.startsWith(prefix + 'booguisaurio')) { 
 message.channel.send(`Soy un dinosaurio que sabe rockear`);
}else 
if(message.content.startsWith(prefix + 'velas')) { 
 message.channel.send(`La ultima vez casi quemo el estudio...`);
}else 
if(message.content.startsWith(prefix + 'cerveza')) { 
 message.channel.send(`https://www.youtube.com/watch?v=rSNzeI_ij-I`);
}
 
 });
 
client.login(process.env.BOT_TOKEN);
 
