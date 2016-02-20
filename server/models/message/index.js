import { Schema, model as Model } from 'mongoose';

const MessageSchema = new Schema({
  roomId: String,
  content: Array
}, { timestamps: true });

export default Model('Message',  MessageSchema);