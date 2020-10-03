const Command = require('../../Structures/Command');
const asciifyImg = require('asciify-image');

module.exports = class extends Command {

     constructor(...args) {
          super(...args, {
               aliases: ['asciificar'],
               description: 'Transforma uma imagem em uma asciiart.',
               category: 'Fun',
               usage: '<imagem>'
          });
     }

     async run(message){
          //
     }

}