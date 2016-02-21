import { Schema, model } from 'mongose';

const SkillSchema = new Schema({
    name: String
});

export default model('Skill', SkillSchema);