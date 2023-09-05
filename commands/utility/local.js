const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("local")
    .setDescription("Replies with Top local attire designer"),
  async execute(interaction) {
    await interaction.reply("The best we have is - Golden row fashion");
  },
};
