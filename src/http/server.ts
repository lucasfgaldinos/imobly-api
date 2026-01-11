import { envs } from '@/config/envs.js';
import { app } from './app.js';

app
  .listen({
    host: '0.0.0.0',
    port: envs.APP_PORT,
  })
  .then(() => console.log(`Server is running on port ${envs.APP_PORT}! 🚀`));
