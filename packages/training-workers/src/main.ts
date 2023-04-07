import type { EventFunction, Context } from '@google-cloud/functions-framework';

const { foo = 'testBar' } = process.env;

export const TrainingWorkers: EventFunction = async (data, context: Context) => {
  res.status(200).send(foo);
};
