import { Router } from 'express';

import ReportController from '../controller/ReportController';

const reportRouter = Router();

reportRouter.get('/reportCSV', ReportController.downloadCSV);

export default reportRouter;
