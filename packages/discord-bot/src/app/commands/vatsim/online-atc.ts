import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
} from 'discord.js';
import { markdownTable } from 'markdown-table';
import { getISODate } from '../../helpers/get-formatted-date';
import { getOnlineAtc } from '../../services/vatsim/core-client';
import { Command } from '../../types';

const prepareResponse = (content: Array<Record<string, string>>): string => {
  const onlineAtc = content.reduce((acc,crt) => ([
    ...acc, 
    [crt.name, crt.callsign, crt.frequency]
  ]), [['Controller', 'Callsign', 'Frequency']])
  const mkTable = markdownTable(onlineAtc)
  return '```' + mkTable + '```'
}

export const OnlineAtc: Command = {
  name: 'online-atc',
  description: 'Lists online controllers',
  type: ApplicationCommandType.ChatInput,
  run: async (_: Client, interaction: CommandInteraction) => {
    const content = await getOnlineAtc();
    await interaction.followUp({
      ephemeral: true,
      embeds: [
        {
          title: 'ONLINE ATC', 
          description: content ? prepareResponse(content) : 'No ATC online :cry:',
          timestamp: getISODate()
        },
      ],
    });
  },
};
