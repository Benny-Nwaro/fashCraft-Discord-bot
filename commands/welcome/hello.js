const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with Hi, Welcome to FashCraft!"),
  async execute(interaction) {
    await interaction.reply("Hi, Welcome to FashCraft!");
  },
};
