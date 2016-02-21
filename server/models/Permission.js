import { Schema, model } from 'mongoose';

const PermissionSchema = new Schema({
  name: String,
  description: String
});

export default model('Permission', PermissionSchema);
