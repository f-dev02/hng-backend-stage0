import { Router } from 'express';
import { ProfileController } from '../controllers/profileController';

const router = Router();
const profileController = new ProfileController();

router.get('/me', (req, res) => profileController.getMe(req, res));

export default router;