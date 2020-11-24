const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const multer = require('multer');
const upload = multer({dest: __dirname + '/images/uploads'});
const port = 3000;
const path = require('path');

app.post('/upload', upload.single('photo'), (req, res) => {
	const fileName = req.file.originalname;
	res.send({filename: fileName});
	//res.send('***** Image uploaded successfully!');
	const tempPath = req.file.path;
	//const targetPath = path.join(__dirname, '/images/uploads/aaa.jpg');
    var targetPath = path.join(__dirname, '/images/uploads/');
	var targetPath = path.join(targetPath, fileName );

	fs.rename(tempPath, targetPath, err => {});
	console.log('***** Image uploaded successfully!' ); 
	/*
	if(req.file) {
	        res.json(req.file);
    }
    else throw 'error';
	*/
});

app.listen(port, () => {
  console.log('listening to port 3000' );
});

app.use(express.static(path.join(__dirname,'../my-electron-app')));

//module.exports = app;


/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/