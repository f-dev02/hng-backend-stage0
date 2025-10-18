import express, { Application } from 'express';
import routes from './routes';
import { corsMiddleware } from './middleware/cors';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

export const createApp = (): Application => {
    const app = express();

    // Middleware
    app.use(corsMiddleware);
    app.use(express.json());

    // Routes
    app.use('/', routes);

    // Error handlers
    app.use(notFoundHandler);
    app.use(errorHandler);

    return app;
};