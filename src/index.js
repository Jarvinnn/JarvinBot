const { Client } = require('klasa');

const private = require('../config/private.js');

new Client({
    fetchAllMembers: false,
    prefix: '$',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login(private.token);
