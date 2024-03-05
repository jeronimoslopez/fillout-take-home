import { IResponses } from '@src/models/Response';
import * as process from 'process';

async function getAll(id: string): Promise<IResponses[]> {
  const response = await fetch(process.env.FILLOUT_API_URL + '/v1/api/forms/' + id + '/submissions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'cors': 'cors',
      'Authorization': 'Bearer ' + process.env.FILLOUT_API_KEY,
    }});

  const data = response.json();
  
  return data as Promise<IResponses[]>;
}

export default {
  getAll,
} as const;