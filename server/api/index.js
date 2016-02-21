import { Router } from 'express';
import AddressRoutes from './Address.routes';
import ContractorRequestRoutes from './ContractorRequest.routes';
import MessageRoutes from './Message.routes';
import NotificationRoutes from './Notification.routes';
import PermissionRoutes from './Permission.routes';
import RequestRoutes from './Request.routes';
import SkillRoutes from './Skill.routes';
import UserRoutes from './User.routes';

export default Router()
	.use('/address', AddressRoutes)
	.use('/contractorrequest', ContractorRequestRoutes)
	.use('/message', MessageRoutes)
	.use('/notification', NotificationRoutes)
	.use('/permission', PermissionRoutes)
	.use('/request', RequestRoutes)
	.use('/skill', SkillRoutes)
	.use('/user', UserRoutes);
