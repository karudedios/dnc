import mongoose, { Schema } from 'mongoose';

const SkillSchema = new Schema({
    name: String
});

export default mongoose.model('Skill', SkillSchema);