
//var createError = require('http-errors');
var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var logger = require('morgan');
var multer = require('multer');
//var ejs = require('ejs');
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const port = 3000;
var app = express();
const upload = multer({dest: __dirname + '/images/uploads'});
app.use(express.static('public'));
app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});
 
//app.use(bodyParser.json());
//var upload = multer({dest: __dirname + '/public/images/uploads'});
/*var Storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './public/images/uploads');
	},
	filename: function (req, file, callback) {
		callback(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
	}
});
*/
//const fs = require('fs');
/*	
const storage = multer.diskStorage({
	destination: './public/images/uploads',
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
*/
//init upload
/*
const upload = multer({
	 storage: Storage
}).array('imgUploader', 3);
*/

/*
// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

/*
let newPath = 'public/images/uploads/${req.file.originalname}'
fs.rename(req.file.path, newPath, () => {
    res.json({result: 'image uploaded successful'})
});
*/

/*****/
/*
app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
		if(err){
			res.render('index', {
			msg: err
			});
		} else {
			if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: 'images/${req.file.filename}'
        });
      }
    }
  });
});
*/
/*
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
	
app.post('api/Upload', function(req, res) {
    upload(req, res, function (err) {
	if (err) {
		return res.end("Something went wrong!");
	}
	return res.end("File uploaded sucessfully!.");
	});
});
*/
//app.set('view engine', 'ejs');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('jsonp callback name', 'callback');

/*
app.get("/main.js", function(req, res) {
	res.send("This Is My Path");
});
*/


app.listen(port, () => {
  console.log('listening to port 3000' );
});

module.exports = app;


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