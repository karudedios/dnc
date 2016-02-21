import { Schema, model } from 'mongoose';
import Request from '../request/index';

const ContractorRequestSchema = new Schema({
    contractor:  {
        type: Schema.ObjectId,
        ref: 'User',
        set: function ignoreEmptyStrings(value) {   
                return value === "" ? undefined : value;
            }
    },
    request: {
        type: Schema.ObjectId,
        ref: 'Request',
        set: function ignoreEmptyStrings(value) {
                return value === "" ? undefined : value;
            }
    }
});

ContractorRequestSchema.pre('save', function(next) {
    Object.assign(this, { request : this.request || new Request() });
    return this.request.save instanceof Function ? this.request.save(next) : next();
});

export default model("ContractorRequest", ContractorRequestSchema);
