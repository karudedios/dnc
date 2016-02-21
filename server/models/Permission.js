import { Schema, model as Model } from 'mongoose';

const PermissionSchema = new Schema({
  name: String,
  description: String
});

export default Model('Permission', PermissionSchema);
