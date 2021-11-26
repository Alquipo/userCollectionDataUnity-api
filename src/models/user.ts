import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  nickname: string;
  scene: number;
  q1?: Array<string>;
  q2?: Array<string>;
  q3?: Array<string>;
  q4?: Array<string>;
  q5?: Array<string>;
}

export const userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  scene: {
    type: Number,
    required: true
  },
  q1: {
    type: Array,
    required: false
  },
  q2: {
    type: Array,
    required: false
  },
  q3: {
    type: Array,
    required: false
  },
  q4: {
    type: Array,
    required: false
  },
  q5: {
    type: Array,
    required: false
  }
  // createdAt: { type: Date, default: Date.now },
  // updateAt: { type: Date, default: Date.now }
});

export default model<IUser>('User', userSchema);
