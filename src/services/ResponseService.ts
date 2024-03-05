import { IResponses } from '@src/models/Response';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import ResponseRepo from '@src/repos/ResponseRepo';

export async function getAll(id: string): Promise<IResponses[]> {
  try {
    return await ResponseRepo.getAll(id);
  } catch {
    throw new RouteError(
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
      'Failed to get responses');
  }
}

export default {
  getAll,
} as const;