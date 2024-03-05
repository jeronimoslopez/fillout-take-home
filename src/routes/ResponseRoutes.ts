import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ResponseService from '@src/services/ResponseService';
import { IReq, IRes } from './types/express/misc';

async function getAll(req: IReq, res: IRes) {
  const id = req.params.formId;
  const response = await ResponseService.getAll(id);
  return res.status(HttpStatusCodes.OK).json({ response });
}

export default {
  getAll,
} as const;