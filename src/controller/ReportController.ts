import { Request, Response } from 'express';

import UserModel from '../models/user';
import { downloadCSV } from '../utils/parseCSV';

class ReportController {
  downloadCSV = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();
      const fields = [
        {
          label: 'Nickname',
          value: 'nickname'
        },
        {
          label: 'Scene',
          value: 'scene'
        },
        {
          label: 'Quiz 1',
          value: 'q1'
        },
        {
          label: 'Quiz 2',
          value: 'q2'
        },
        {
          label: 'Quiz 3',
          value: 'q3'
        },
        {
          label: 'Quiz 4',
          value: 'q4'
        },
        {
          label: 'Quiz 5',
          value: 'q5'
        }
      ];

      return downloadCSV(res, 'reportUsers.csv', fields, users);
    } catch (err) {
      console.log('Error generate CSV', err);
      return res.status(400).json({ message: err });
    }
  };
}

export default new ReportController();
