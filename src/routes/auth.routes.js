import * as authCtrl from '../controllers/auth.controller';

import { Router } from 'express';

const router = Router();

router.post('/signin', authCtrl.signin);
router.post('/signup', authCtrl.signup);

export default router;
