import {z} from 'zod';

interface ValidateConfig<T extends z.ZodTypeAny> {
  dto: unknown;
  schema: T;
  schemaName: string;
}

export function validateSchema<T extends z.ZodTypeAny>(
  config: ValidateConfig<T>,
): z.infer<T> {
  const {data, success, error} = config.schema.safeParse(config.dto);

  if (success) {
    return data;
  }

  captureError(`API Validation Error: ${config.schemaName}`, {
    dto: config.dto,
    error: error.message,
    issues: error.issues,
  });

  throw error;
}

function captureError(message: string, extra = {}): void {
  if (__DEV__) {
    console.error(message, extra);
  }
}
