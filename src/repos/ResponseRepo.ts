import {ResponseParams, ResponseCollection} from '@src/models/Response';
import * as process from 'process';

function createUrl(baseUrl: string, queryParams: ResponseParams): string {
  console.log(queryParams);
  const stringParams: Record<string, string> = {};
  for (const key in queryParams) {
    if (key === 'filters') {
      continue;
    }
    if (queryParams[key] !== undefined) {
      stringParams[key] = String(queryParams[key]);
    }
  }
  const params = new URLSearchParams(stringParams).toString();
  return `${baseUrl}?${params}`;
}

async function getAll(id: string, query: ResponseParams): Promise<ResponseCollection> {
  const url = createUrl(process.env.FILLOUT_API_URL + '/v1/api/forms/' + id + '/submissions', query);
  const response = await fetch(url , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'cors': 'cors',
      'Authorization': 'Bearer ' + process.env.FILLOUT_API_KEY,
    }});

  return await response.json();
}

export default {
  getAll,
} as const;