import {TodaysImageSchema} from '@schemas/todays-image';
import {z} from 'zod';

const {ResponseOfGet} = TodaysImageSchema;

export namespace TodaysImageModel {
  export type ResponseOfGet = z.infer<typeof ResponseOfGet>;
}
