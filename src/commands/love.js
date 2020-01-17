const { Command } = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            usage: '<name:str>'
        });
    }
    async run(msg, [name]) {
        if (msg.content.includes('Zam') || msg.content.includes('zam') || msg.content === 'Zam' && 'zam') {
            return msg.send(`${name} loves you 73%! ` + '<:bpaptu:652184522007511071>')   
        }
        return msg.send(`${name} loves you ${Math.floor(Math.random() * 100) + 1}%!`)
    }

}