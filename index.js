require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Configuration des intents nécessaires pour recevoir et envoyer des messages
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Nécessaire pour les actions de base dans les serveurs
        GatewayIntentBits.GuildMessages, // Pour recevoir et envoyer des messages dans les serveurs
        GatewayIntentBits.MessageContent, // Pour accéder au contenu des messages
    ]
});

client.on('ready', () => {
    console.log('Client disponible.');
});

client.on('messageCreate', message => {
    if (message.mentions.has(client.user)) {
        const sender = message.author.id;
        message.reply(`<@${sender}> j'ai bien reçu ton message, ça fonctionne!`);
    }
});

// Connexion du bot en utilisant le token du bot
client.login(process.env.BOT_TOKEN);
