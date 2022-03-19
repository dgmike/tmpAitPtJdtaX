import pkg from './index.js';

const port = process.env.PORT || 3000;

pkg.app.listen(port);

console.info(`Listening on port ${port}`);
