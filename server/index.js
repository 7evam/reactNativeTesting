const express = require('express'),
      app = express(),
      PORT = 3000,
      bodyParser = require('body-parser');



const testRoutes = require('./routes/test')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',function(req,res){
  res.send("Hi there, this is from the index page")
});

app.use('/api', testRoutes);


app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));
