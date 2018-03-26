const express = require('express');
const app = express();

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/', express.static('html'))

const server = app.listen(process.env.NODE_PORT || 3000, () => {
	console.log('running...');
})