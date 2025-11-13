import { app } from './app.js';

const PORT = 4000;

app
  .listen({
    host: '0.0.0.0',
    port: PORT,
  })
  .then(() => console.log(`Server is running on port ${PORT} 🚀`));
