import { Command } from '../types';
import { Ping } from './general/ping';
import { Metar } from './met/metar';
import { OnlineAtc } from './vatsim/online-atc';

export const Commands: Command[] = [Ping, Metar, OnlineAtc ];
