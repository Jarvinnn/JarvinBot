const { Command } = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			description: 'Roll a number from 1-100 to 1-100M!',
			usage: '[max:int{2}]'
		});
	}

	async run(msg, [max = 100]) {
		if (max > 100000000) throw "I can't roll a number higher than 100 million!";
		return msg.send((Math.floor(Math.random() * max) + 1).toLocaleString());
	}
};
