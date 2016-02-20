import { Schema, Model } from 'mongose';

const SkillSchema = new Schema({
    name: String
});

export default Model('Skill', SkillSchema);