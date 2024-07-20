import {z} from 'zod';

export const PostImage = z.object({
  copyright: z.string().optional(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string().optional(),
  media_type: z.string(),
  service_version: z.string(),
  title: z.string(),
  url: z.string(),
});

export const Image = z.object({
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  media_type: z.string(),
  service_version: z.string(),
  title: z.string(),
  url: z.string(),
});

export const ResponseOfGet = Image.or(PostImage.array());
