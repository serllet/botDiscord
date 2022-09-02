let fs = require('fs');
const Discord = require("discord.js");
const { channel } = require('diagnostics_channel');
const client = new Discord.Client();

// CÓDIGO

async function mensajeDiscord(vendedor,alias, img,url) {
  
  try{
    client.on("ready",() => {
      console.log('El bot está listo');

      const channels = client.channels.cache.filter(channel => channel.name.includes('scrapping'))
      if (channel.size > 0){
        channels.forEach( channels =>{
          channel.send('Product ${alias} on ${vendedor}')
        })
      }
    });
    await client.login("OTc3ODIzNDUwMjk3MTQzMjk4.Gd4KFV.YIe7idHaSlpvc020pwmgTAZTGXWylJ9hiywU2Y");
  }
  catch(error){

  }
  
}

exports.default = { mensajeDiscord }



