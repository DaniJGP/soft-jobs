require('dotenv/config');
const app = require('./src/app.js');
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || 'http://localhost';

app.listen(PORT, () => {
    console.log(`Server ON at ${BASE_URL}:${PORT}`);
});
