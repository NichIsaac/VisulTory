const fs = require('fs');
const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('Retrieve informations on specified commands you want to know, or get all the list available'),
    async execute(interaction, client) {

        const commandFolders = fs.readdirSync('./src/commands');
        const cmdList = new EmbedBuilder()
            .setTitle('General Command List')
            .setDescription('Fetchs all availabel commands for you')
            .setColor('#06c3ef')
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            });

        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                cmdList.addFields([
                    { name: command.data.name, value: `Category: ${folder}\nDescription: ${command.data.description}` }
                ]);
            }
        }

        await interaction.reply({ embeds: [cmdList] });
    //     const commandList = [];

    //     const commandFolders = fs.readdirSync('./src/commands');

    //     for (const folder of commandFolders) {
    //         const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
    //         for (const file of commandFiles) {
    //             const command = require(`../../commands/${folder}/${file}`);
    //             commandList.push(`${folder} > ${command.data.name} - ${command.data.description}`);
                
    //         }
    //     }

    //     const cmdList = new EmbedBuilder()
    //         .setTitle('General Command List')
    //         .setDescription('Fetchs all availabel commands for you')
    //         .setColor('#06c3ef')
    //         .addFields([
    //         ])
    // }
    }
}