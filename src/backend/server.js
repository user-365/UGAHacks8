 // index.js
 const express = require('express'); // express 
 const app = express(); // app
 const port = 5000;
 
 app.get('/', function (req, res) {
   res.send('hello world!!');
 });
 
 app.listen(port, () => console.log(`${port}`));
 
 const mongoose = require('mongoose');
 mongoose
   .connect(
     'mongodb+srv://gp123:gp123@cluster0.2p70htf.mongodb.net/retryWrites=true&w=majority',
     {
       // useNewUrlPaser: true,
       // useUnifiedTofology: true,
       // useCreateIndex: true,
       // useFindAndModify: false,
     }
   )
   .then(() => console.log('MongoDB conected'))
   .catch((err) => {
     console.log(err);
   });
   
   