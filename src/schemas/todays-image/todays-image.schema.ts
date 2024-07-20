import {z} from 'zod';

export const ResponseOfGet = (() => {
  return z.object({
    date: z.string(),
    explanation: z.string(),
    hdurl: z.string(),
    media_type: z.string(),
    service_version: z.string(),
    title: z.string(),
    url: z.string(),
  });
})();
