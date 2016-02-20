import { Schema, Model } from 'mongose';
import User from '../user/index';

const RequestSchema = new Schema({
    client:  {
        type: Schema.ObjectId,
        ref: 'User',
        set: function ignoreEmptyStrings(value) {
                return value === "" ? undefined : value;
            }
    },
    requestDate: Date,
    description: String,
    type: String
});

RequestSchema.pre('save', function(next) {
    Object.assign(this, { client : this.client || new User() });
    return this.client.save instanceof Function ? this.client.save(next) : next();
});

export default Model('Request', RequestSchema);