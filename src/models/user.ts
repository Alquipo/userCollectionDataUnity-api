import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  nickname: string;
  scene: number;
  q1?: Array<string>;
  q2?: Array<string>;
  q3?: Array<string>;
  q4?: Array<string>;
  q5?: Array<string>;
  q6?: Array<string>;
  q7?: Array<string>;
}

export const UserSchema = new mongoose.Schema({
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
  },
  q6: {
    type: Array,
    required: false
  },
  q7: {
    type: Array,
    required: false
  }
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
