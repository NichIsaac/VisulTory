module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Status: Ready \n Logged as: ${client.user.tag}`);
    }
}