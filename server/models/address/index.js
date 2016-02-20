import { Schema, model as Model } from 'mongoose';

const AddressSchema = new Schema({
  street: String,
  country: String,
  city: String,
  zip: String,
  state: String,
  line1: String,
  line2: String
});

export default Model('Address', AddressSchema);
