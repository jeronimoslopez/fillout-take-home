import { Router } from 'express';

import Paths from '../constants/Paths';
import ResponseRoutes from './ResponseRoutes';


// **** Variables **** //
const apiRouter = Router();

// ** Add UserRouter ** //
const responseRouter = Router({ mergeParams: true });

// Get all responses
responseRouter.get(
  Paths.Responses.Get,
  ResponseRoutes.getAll,
);

// Add ResponseRouter
apiRouter.use(Paths.Responses.Base, responseRouter);

// **** Export default **** //

export default apiRouter;
