import { Router } from 'express';
import AddressApi from './Address.api';
import AuthApi from './Auth.api';
import ContractorRequestApi from './ContractorRequest.api';
import MessageApi from './Message.api';
import NotificationApi from './Notification.api';
import PermissionApi from './Permission.api';
import RequestApi from './Request.api';
import SkillApi from './Skill.api';
import UserApi from './User.api';

export default Router()
	.use('/address', AddressApi)
	.use('/auth', AuthApi)
	.use('/contractorrequest', ContractorRequestApi)
	.use('/message', MessageApi)
	.use('/notification', NotificationApi)
	.use('/permission', PermissionApi)
	.use('/request', RequestApi)
	.use('/skill', SkillApi)
	.use('/user', UserApi);
