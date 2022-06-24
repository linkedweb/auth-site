const express = require('express');
const path = require('path');

require('dotenv').config();

const registerRoute = require('./routes/auth/register');

const app = express();

app.use(express.json());

app.use(registerRoute);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
	return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
