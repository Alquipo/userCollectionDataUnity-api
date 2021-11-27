import { Router } from 'express';

import ReportController from '../controller/ReportController';

const reportRouter = Router();

reportRouter.get('/userReport', ReportController.downloadCSV);

export default reportRouter;
