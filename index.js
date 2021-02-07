const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( cors() );

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/get/comments', ( req,res ) => {

    https.get('https://jsonplaceholder.typicode.com/comments', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.send( JSON.parse( data ) );
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
});

app.delete('/comments/:id', ( req,res ) => {

  const id = req.params.id;

  console.log('ID:', id);

  https.get('https://jsonplaceholder.typicode.com/comments', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      const parsedData = JSON.parse( data );
      const filteredData = parsedData.filter( fid => fid.id != id );
      res.send( filteredData );
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.listen(process.env.PORT || 3001)
