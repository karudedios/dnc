import { Schema } from 'mongose';

const SkillSchema = new Schema({
    name: String
});

export default mongoose.model('Skill', SkillSchema);