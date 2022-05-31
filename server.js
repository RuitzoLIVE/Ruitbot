//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE 

const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Conectado Y en Operacion");
  client.user.setPresence({
    status: "online",
    activity: {
      name: "MOTOSEXOCUATICO | Prefix: rtv!",
      type: "LISTENING"
    }
  });
});


let prefix = process.env.PREFIX;
client.on('message', message => {
  if (message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift ().toLowerCase();

if(command === "robot"){
    const embed = new Discord.MessageEmbed()
    .setAuthor("se pasa de verga el juan XDXD")
    .setTitle(" rtv! | __**COMANDOS SECRETOS**__ ")
 .setDescription("robostonks xd")
    .setImage("https://cdn.glitch.com/8d497623-c521-4253-8a6c-8f0d31e82fc8%2F1d89cff6-a7fc-4db8-9145-855f6e809af7.image.png?v=1613115701086")
.setColor("RANDOM")
.setFooter("Comando Secreto 1/1")
    .setTimestamp();
message.channel.send(embed);
  }
"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  //aqui los omandos nsfw °///° XD 
  if(command === "r34"){
  const r34 = new (require('r34api.js'))
const {MessageEmbed} = require('discord.js') 
if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18')   
if(!args.join(" ")) return message.channel.send('Escribe los tags a buscar, tont0') //si no escriben tags retorna
if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18')   
    r34.search(args.join("")).then(json => { //resolvemos la promesa
  const embed = new MessageEmbed()
.setAuthor("Ruitbot V1.0 | NSFW" , client.user.displayAvatarURL)
.setColor("RANDOM")
.setTitle("SEÑORA SU HIJO ESTA VIENDO MONAS SHINAS ENKUERADAS") //Viva Bulzy!
.setImage(json.data.media) //json.data.media devuelve el link de la imagen
.setFooter('ESTA IMAGEN O VIDEO LO VEN LOS PAJEROS')//Viva Esponjosin y Rickz!
  .setTimestamp();
message.channel.send(embed)
}).catch((err) => console.error(err))//catcheamos por si acaso
}
  const nsfw = require("discord-simple-nsfw") //definimos el paquete

// Dentro de el evento message crearemos el comando (sin command handler)

if (message.content.startsWith("rtv!boobs")) {
    if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18') 
     const boobs = nsfw.boobs('real') // tambien puedes seleccionar hentai

     message.channel.send(boobs)

     
}
    
if (message.content.startsWith("rtv!hentai boobs")) {
    if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18')
     const boobs = nsfw.boobs('hentai') 

     message.channel.send(boobs)
}
  if(command === "fuck"){
   let gifs = ['https://media.discordapp.net/attachments/541290399155748867/777013721016041492/DOKVAtjI.gif?width=333&height=188', 'https://images-ext-1.discordapp.net/external/tchqwgNsKvTnYCKYgonIs91V434dsEyaBV1S4NAXHN0/https/64.media.tumblr.com/6d850e57c0e46e2764e1ec93a4636e2e/tumblr_oiren7PxlM1v2hfg0o2_640.gif?width=333&height=188', 'https://images-ext-1.discordapp.net/external/RhkJaettYeyLYV5MBZ00pzzkzXOSlWLumAgMxeHwa-c/https/media.discordapp.net/attachments/793824080331669525/793923362149367858/45.gif?width=171&height=250'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18') 
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | NSFW" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(`**${user.username}**  fue cojido por  **${message.author.username}**`)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919  y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
  
  if(command === "suck"){
   let gifs = ['https://media.discordapp.net/attachments/602747804418572289/688863694121467980/4.gif?width=333&height=187', 'https://media.discordapp.net/attachments/602747804418572289/688863698365841476/3.gif?width=333&height=235', ' https://media.discordapp.net/attachments/602747804418572289/688863905145290808/13.gif?width=333&height=188','https://cdn.discordapp.com/attachments/602747804418572289/688863976569831522/19.gif   **jaja pico XD**'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18') 
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | NSFW" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(`**${message.author.username}**  se la chupa a   **${user.username}** °///° XD`)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919  y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
  if(command === "nekos"){
   let gifs = [   'https://cdn.glitch.com/c635c2f1-8e8d-4328-b67e-5630e026aca9%2F3195288a-f1eb-4e33-a4a8-fb76a0bad306.image.png?v=1612904988339', 'https://cdn.glitch.com/c635c2f1-8e8d-4328-b67e-5630e026aca9%2F3195288a-f1eb-4e33-a4a8-fb76a0bad306.image.png?v=1612904988339', 'https://cdn.glitch.com/c635c2f1-8e8d-4328-b67e-5630e026aca9%2F3195288a-f1eb-4e33-a4a8-fb76a0bad306.image.png?v=1612904988339'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18') 
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | NSFW" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(`Disfruta tus gatitos miauu XD`)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
   if(command === "nekogif"){
   let gifs = [ 'https://images-ext-2.discordapp.net/external/lpBLSQTVLAFCHxyh6_lPHKD-wHbvJlbDaiNPWC3216Y/%3Fwidth%3D333%26height%3D250/https/images-ext-2.discordapp.net/external/g3gsJjUvh7WC2RhuYITLtiH_PBxZiYcIj5DIy7sM8WU/https/cdnio.luscious.net/76/lusciousnet_lusciousnet_44fe40f933762e6dba937174d8f67755_532109789.gif?width=278&height=208','https://images-ext-1.discordapp.net/external/80Zl7QRSkZS0AmA8pPviU9ZV1iKQDDPq0SaeOXVVXhU/https/thumb-p3.xhcdn.com/a/qW91zWcOSqAScusSuOx2bg/000/152/651/783_450.gif?width=333&height=187','https://images-ext-2.discordapp.net/external/BTAVrb-9BWkJbCn_W8A5hQNs_vibjR2OTznaBUfL-IQ/https/gifs.luscious.net/doritos65/298/lusciousnet_lusciousnet_neko-2_969438295.gif?format=png&width=333&height=188','https://cdnio.luscious.net/doritos65/366/lusciousnet_lusciousnet_neko-4_831071244.gif', 'https://thumb-p8.xhcdn.com/a/WGkQ6iLToxlcJiENIg3Bow/000/160/405/298_450.gif', 'https://thumb-p3.xhcdn.com/a/qW91zWcOSqAScusSuOx2bg/000/152/651/783_450.gif',  ] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   if(!message.channel.nsfw) return message.channel.send('Este comando solo se puede enviar en canales NSFW / +18') 
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 |NSFW" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(`Disfruta tus gatitos miauu XD`)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
  "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
 //aqui los comandos de interaccion
  if(command === "kiss"){
   let gifs = ['https://media.discordapp.net/attachments/399448944889036801/707018974495244298/38f5465f46766643.gif?width=250&height=141', 'https://images-ext-1.discordapp.net/external/jtoXvFQ6a2KOHPYUlpdEt3FCh96oC0Nc18NmAh5J7xE/https/imgur.com/poxPMvI.gif?width=333&height=179', 'https://media.discordapp.net/attachments/399448944889036801/768862445019070474/db94c75f9fb6dfbe1fd5799ceda7c2fa.gif?width=333&height=250'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.
if (message.mentions.users.size < 1) return message.reply('Para poder besar a alguien por favor mencione o que me quieres besar a mi? puto? acaso eres del team kong?.').catch(console.error); //En caso de que no mencionamos a alguien hacemos un return.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | INT" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(`**${user.username}**  fue besado por por  **${message.author.username}**`)
.setFooter("Creadores:ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
 if(command === "kill"){
   let gifs = ['https://cdn.glitch.com/c635c2f1-8e8d-4328-b67e-5630e026aca9%2Fc2205ed7-86e2-4df7-bca8-dfbc9e50c584.image.png?v=1612767010791', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/mnpzjzdmbbasurmcodvu.png', 'https://www.somosxbox.com/wp-content/uploads/2020/05/y2konya_CallofDutyModernWarfare2CampaignRemastered_20200513_01-24-49-1024x576.jpg'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.
if (message.mentions.users.size < 1) return message.reply('Para poder matar a alguien por favor mencione.').catch(console.error); //En caso de que no mencionamos a alguien hacemos un return.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | INT" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(` **${message.author.username}** ejecuto a   **${user.username}** ;-; te recordaremos **${user.username}**`)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
if(command === "hug"){
   let gifs = ['https://media.discordapp.net/attachments/399448944889036801/767454297952223242/Yaoi_run_or_hug.gif?width=333&height=234', 'https://images-ext-2.discordapp.net/external/GvQ3Tc6g_iPuaH2ofcgMKso2lpAK0j06pgmvrD1-aLM/https/imgur.com/ICARGyL.gif?width=333&height=188', 'https://media.discordapp.net/attachments/399448944889036801/756666891023417414/fb34975cb62f2a0f423f223bbfe4e216.gif?width=333&height=187'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.
if (message.mentions.users.size < 1) return message.reply('Para poder abrazar a alguien por favor mencione.').catch(console.error); //En caso de que no mencionamos a alguien hacemos un return.

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | INT" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(` **${message.author.username}**  abrazo a    **${user.username}** UwU `)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)

  }
  if(command === "suicide"){
   let gifs = ['http://1.bp.blogspot.com/-KcVyYxhM-4M/T0S8DDHNEbI/AAAAAAAAaCY/PoVJ58jUPdo/s1600/another7.jpg', 'https://i.pinimg.com/236x/e6/f4/65/e6f465ad89d0ef08081ce8a3cfb97d95--sad-anime-anime-guys.jpg', 'https://images.uncyclomedia.co/inciclopedia/es/thumb/3/36/Minecraftsuicide.png/300px-Minecraftsuicide.png','https://cdn.glitch.com/ff233f08-9cb0-45bf-b0e5-7a24f3e3ef86%2Fimage%20(2).png?v=1617183035387'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */

/* Ahora Mandaremos el link en un embed 
VERSION 11 */
   const embed = new Discord.MessageEmbed()
   .setAuthor(" __**Gore Alert**__ | Ruitbot V1.0 |INT" , client.user.displayAvatarURL)
.setImage(randomIMG)
    .setTitle(` **${message.author.username}** se suicido ;-; te recordaremos **${message.author.username}** `)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
   .setTimestamp();
message.channel.send(embed)
  }
 

   "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
 
  
  "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
 //comandos de moderacion 
  if(command === "kick"){
   let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.
let razon = args.slice(1).join(' ');   //Declaramos esta variable para poder poner la razon

var perms = message.member.hasPermission("KICK_MEMBERS"); //Debe tener el permiso "KICK_MEMBERS" para poder ejecutarlo.

if(!perms) return message.channel.send("?No tienes permisos para ejecutar este comando. Lo siento"); //Agregamos un return si no tiene el permiso.
if (message.mentions.users.size < 1) return message.reply('Para poder Expulsar a alguien por favor mencione.').catch(console.error); //En caso de que no mencionamos a alguien hacemos un return.

if (!razon) return message.channel.send("¡Hey! Necesitas poner una razon para poder Expulsarlo, escribela despues de la mencion.");
if (!message.guild.member(user).kickable) return message.reply('? No puedo Expulsar al usuario mencionado.'); //Un return si la persona no esta en el server o tiene un role mayor.     
message.guild.member(user).kick(razon);

//Aqui empezamos a construir el RichEmbed. 

const embed = new Discord.MessageEmbed()
.setAuthor("Ruitbot V1.0 | MOD" , client.user.displayAvatarURL)
.setTitle(" ALV! | Nuevo usuario Expulsado del servidor")
.addField(`**${user.username}**  fue Expulsado del servidor, razón: **${razon}**`,  " La persona responsable fue "+message.author.username)
.setFooter(message.author.username, message.author.displayAvatarURL)
.setTimestamp() 
.setColor("RANDOM")
.setTimestamp();
message.channel.send(embed);
  } 
   if(command === "warn"){
   let user = message.mentions.users.first(); //Debemos de mencionar a alguien para poder kickearlo.
let razon = args.slice(1).join(' ');   //Declaramos esta variable para poder poner la razon

var perms = message.member.hasPermission("MUTE_MEMBERS"); //Debe tener el permiso "KICK_MEMBERS" para poder ejecutarlo.

if(!perms) return message.channel.send("?No tienes permisos para ejecutar este comando. Lo siento"); //Agregamos un return si no tiene el permiso.
if (message.mentions.users.size < 1) return message.reply('Para poder advertir a alguien por favor mencione.').catch(console.error); //En caso de que no mencionamos a alguien hacemos un return.
if (!razon) return message.channel.send("¡Hey! Necesitas poner una razon para poder advertirlo, escribela despues de la mencion.");
if (!message.guild.member(user).kickable) return message.reply('? No puedo advertir al usuario mencionado.'); //Un return si la persona no esta en el server o tiene un role mayor.     


const embed = new Discord.MessageEmbed()
.setAuthor("Ruitbot V1.0 | MOD" , client.user.displayAvatarURL)
.setTitle(" ALV! | Nuevo usuario advertido en el servidor")
.addField(`**${user.username}**  ,fue advertido en el  servidor, razón: **${razon}**`," La persona responsable fue "+message.author.username)
.setFooter(message.author.username, message.author.displayAvatarURL)
.setTimestamp() 
.setColor("RANDOM")
.setTimestamp();
message.channel.send(embed);
  }
  if(command === "clear"){
   const Discord = require("discord.js");//Instalar npm -> discord.js
const { MessageEmbed } = require("discord.js");

//Inicio
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))//Necesitas permisos para eliminar mensajes
      return message.channel.send(
        "No Tienes Permisos Para Utilizar Este Comando"//Cualquiera que no tenga permiso no podr� utilizar este comando
      );

    if (!args[0])
      return message.channel.send(`Por Favor, Dame Una Cantidad`);

    if (isNaN(args[0]))
      return message.channel.send(`Por favor, Dame Un Valor Numerico`);

    if (args[10] < 4)//Aqui puedes definir el minimo de mensajes
      return message.channel.send(
        `Puedes eliminarlos ${args[0]} tu mismo, no son tantos mensajes`
      );

    if (args[0] > 100)//Esto no lo modifiquen
      return message.channel.send(
        `No puedo eliminar mas de 100 mensajes ${args[0]} es el limite de discord`
      );

    let Reason = args.slice(1).join(" ") || "Ninguna razon proporcionada";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
  
        .setColor("RANDOM")
        .setTitle(`**__Mensajes Eliminados__**`)
        .addField(`Staff`, `**${message.author.tag}**`)
        .addField(`Canal`, `**${message.channel.name}**`)
        .addField(`Mensajes Eliminados`, `**${Message.size}**`)
        .addField(`Razon:`, `**${Reason}**`)
        .setFooter(`Pedido Por ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
    });
  }
   "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
"deja cambio algunas cosas"
  
   if(command === "8ball"){  
   let messages = [ 'si','no', 'talves','no se','no te quiero decir','NO','probablemente uwu','cy c pero no te wa a decir ']
//* Creamos un array con los GIFS que pueden salir */
let randommessage = messages[Math.floor(Math.random() * messages.length)] 
//* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */
 
   const embed = new Discord.MessageEmbed()
   .setAuthor("Ruitbot V1.0 | INT" , client.user.displayAvatarURL)
    .setTitle(randommessage)
.setFooter("Creadores: ℛ𝓊𝒾𝓉𝒵ℴᴸᴾ#6919 y SUB-ZERO#1068")
    .setColor("RANDOM")
message.channel.send(embed)

  }
  if(command === "pvto"){
   let    messages    = [ 'chinga a tu cola' , 'Hablame bonito imbecil >:(' , 'Que te atropelle un camion >:) ' , 'no se' , 'no te quiero decir' , 'NO' , 'probablemente uwu' , 'cy c pero no te wa a decir' ,'me culie a tu mama anoche','tengo novi@ y tu no','Me Chupa 37 Hectareas de Verga Pvt@',`Que eres pvt@ dice`,`Que quiere sexo dice XD`,`Calla FAN DE KUNNO`]
let randommessage = messages[Math.floor(Math.random() * messages.length)] 
//* Esto harÃ¡ que obtengamos un elemento aleatorio del array "GIFS" */

   message.channel.send(randommessage)
  }
  
});


client.login(process.env.TOKEN);




