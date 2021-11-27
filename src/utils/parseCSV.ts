import { Response } from 'express';
import { Parser } from 'json2csv';

import { IUser } from '../models/user';

export const downloadCSV = (
  res: Response,
  fileName: string,
  fields,
  data: IUser[]
) => {
  const json2csv = new Parser({ fields });
  const csv = json2csv.parse(data);
  res.header('Content-Type', 'text/csv');
  res.attachment(fileName);
  return res.send(csv);
};
