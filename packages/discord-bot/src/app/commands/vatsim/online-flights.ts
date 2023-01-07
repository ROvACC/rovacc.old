import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
} from 'discord.js';
import { markdownTable } from 'markdown-table';
import { getISODate } from '../../helpers/get-formatted-date';
import { getOnlineFlights } from '../../services/vatsim/core-client';
import { Command } from '../../types';

const prepareResponse = (content: Array<Record<string, string>>): string => {
  const onlineAtc = content.reduce((acc,crt) => ([
    ...acc, 
    [crt.name, crt.callsign, crt.frequency]
  ]), [['Controller', 'Callsign', 'Frequency']])
  const mkTable = markdownTable(onlineAtc)
  return '```' + mkTable + '```'
}

export const OnlineFlights: Command = {
  name: 'online-flights',
  description: 'Lists the online flight to/from any of the LRBB FIR airports',
  type: ApplicationCommandType.ChatInput,
  run: async (_: Client, interaction: CommandInteraction) => {
    const content = await getOnlineFlights();
    await interaction.followUp({
      ephemeral: true,
      embeds: [
        {
          title: 'ONLINE FLIGHTS', 
          description: content ? prepareResponse(content) : 'No fligts online :cry:',
          timestamp: getISODate()
        },
      ],
    });
  },
};
