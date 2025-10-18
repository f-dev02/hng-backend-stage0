require("dotenv").config();

import { createApp } from './app';
import { config } from './config/env';
import { logger } from './utils/logger';

console.log("PORT =", process.env.PORT);
const app = createApp();

const HOST = '0.0.0.0'; // Critical for Render!

app.listen(config.port, HOST, () => {
    logger.info(` :) Server is running on ${HOST}:${config.port}`);
    logger.info(` ;) Profile endpoint: http://${HOST}:${config.port}/me`);
});