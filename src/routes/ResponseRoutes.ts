import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ResponseService from '@src/services/ResponseService';
import { IReq, IRes } from './types/express/misc';

async function getAll(req: IReq, res: IRes) {
  const id = req.params.formId;
  const query = req.query;
  const response = await ResponseService.getAll(id, query);
  return res.status(HttpStatusCodes.OK).json(response);
}

export default {
  getAll,
} as const;