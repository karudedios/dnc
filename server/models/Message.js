import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  roomId: String,
  content: Array
}, { timestamps: true });

export default mongoose.model('Message',  MessageSchema);
