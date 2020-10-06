const Command = require('../../Structures/Command');
const asciifyImg = require('asciify-image');


var options = {
     fit: 'box',
     width: 25,
     height: 25
}

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ['asciificar'],
               description: 'Transforma uma imagem em uma asciiart.',
               category: 'Fun',
               usage: '<imagem>'
          });
     }

     async run(message) {

          asciifyImg('https://cdn.discordapp.com/attachments/321836042506207234/761783244869206016/Screenshot_668.png', options)
               .then(function (asciified) {
                    console.log(asciified)
                    message.channel.send(asciified, {code: true});
               })
               .catch(function (err) {
                    console.error(err);
               });

               console.log("Asciify command used.");
     }

}