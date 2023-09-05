const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("foreign")
    .setDescription("Replies with Top foreign attire designer"),
  async execute(interaction) {
    await interaction.reply("The best we have is - Kind Edward fashion house");
  },
};
