import { Schema } from 'mongoose';

const phoneTransformer = {
  type: String,
  set: (phone) => {
    const simplePhone = phone.replace(/[^0-9]/g, '');
    const areaCode = phone.slice(0, 3);
    const phoneNumber = phone.slice(3);

    return `(${areaCode}) ${phoneNumber.replace(/(.{3})/, ($1) => `${$1}-`)}`
  }
};

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  userType: Number,
  profilePic: String,
  description: String,
  rating: Number,
  phone1: phoneTransformer,
  phone2: phoneTransformer,
  minpph: Number,
  maxpph: Number
}, {
  toObject: { virtual: true },
  toJSON: { virtual: true }
});

UserSchema
  .virtual('fullName')
  .get(function() {
    return `${this.firstName} ${this.lastName}`;
  });

export default mongoose.model('User', UserSchema);
