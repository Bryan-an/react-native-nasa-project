import {TodaysImageSchema} from '@schemas/todays-image';
import {validateSchema} from '@utils/schema-validator';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchData = async (
  searchParams?: string[][] | Record<string, string> | string | URLSearchParams,
) => {
  searchParams = searchParams
    ? new URLSearchParams(searchParams)
    : new URLSearchParams();

  searchParams.append('api_key', API_KEY);
  const response = await fetch(`${API_URL}?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const dto = await response.json();

  return validateSchema({
    dto,
    schema: TodaysImageSchema.ResponseOfGet,
    schemaName: 'TodaysImageSchema.ResponseOfGet',
  });
};
