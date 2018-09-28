const express = require('express');
const app = express();
const port = 8080;

app.get('*', (req, res)=>{
	res.send('I am going to be api and I am running on port: ' + port);
});

app.listen(port, ()=>{
	console.log('listening on ' + port);
});
