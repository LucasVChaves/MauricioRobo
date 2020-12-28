const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));
	
		const activities = [
			`${this.client.guilds.cache.size} servidores.`,
			`${this.client.channels.cache.size} canais.`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} usuários`,
			`Comendo o cu de quem ta lendo...`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activities[i++ % activities.length]}`, {type: 'STREAMING'}), 15000);
	}
};