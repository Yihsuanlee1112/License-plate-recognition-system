
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const multer = require('multer');
const upload = multer({dest: __dirname + '/public/images/uploads'});
const port = 3000;
const path = require('path');

app.post('/upload', upload.single('photo'), (req, res) => {
	console.log('**123!' ); 
	const fileName = req.file.originalname;
	res.send({filename: fileName});
	//res.send('***** Image uploaded successfully!');
	const tempPath = req.file.path;
	//const targetPath = path.join(__dirname, '/images/uploads/aaa.jpg');
    var targetPath = path.join(__dirname, '/public/images/uploads/');
	var targetPath = path.join(targetPath, fileName );
	console.log('***345!' ); 
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
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/