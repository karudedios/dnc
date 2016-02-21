import { Schema, model } from 'mongoose';
import Request from '../request/index';

const NotificationSchema = new Schema({
    request: {
        type: Schema.ObjectId,
        ref: 'Request',
        set: function ignoreEmptyStrings(value) {
                return value === "" ? undefined : value;
            }
    } 
});

NotificationSchema.pre('save', function(next) {
    Object.assign(this, { request : this.request || new Request() });
    return this.request.save instanceof Function ? this.request.save(next) : next();
});

export default model("Notification", NotificationSchema)