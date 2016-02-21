import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  roomId: String,
  content: Array
}, { timestamps: true });

export default model('Message',  MessageSchema);
