import {TodaysImageSchema} from '@schemas/todays-image';
import {validateSchema} from '@utils/schema-validator';

const API_KEY = 'RdobLbAh4DeMrae4dreUa9G8aZvMPtW0p5Y6nKDZ';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchData = async (searchParams?: URLSearchParams) => {
  searchParams = searchParams ?? new URLSearchParams();
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
