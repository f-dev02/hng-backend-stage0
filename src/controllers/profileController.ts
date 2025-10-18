import { Request, Response } from 'express';
import { ProfileService } from '../services/profileService';
import { logger } from '../utils/logger';

export class ProfileController {
    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService();
    }

    async getMe(req: Request, res: Response): Promise<void> {
        try {
            logger.info('GET /me - Request received');

            const profile = await this.profileService.getProfile();

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(profile);

            logger.info('GET /me - Response sent successfully');
        } catch (error) {
            logger.error('Error in /me endpoint:', error);

            res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
}