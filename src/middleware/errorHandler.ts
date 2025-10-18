import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    logger.error('Unhandled error:', err);

    res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
    });
};

export const notFoundHandler = (req: Request, res: Response): void => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint not found'
    });
};