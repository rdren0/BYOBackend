const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express()
app.set('port', process.env.PORT || 3000).

app.use(express.json());
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/api/v1/parks', (request, response) => {
    database('parks').select()
      .then((parks) => {
        response.status(200).json(parks);
      })
      .catch((error) => {
        response.status(500).json({ error });
      });
      console.log('Hello world') ;
  });

//   app.get('/api/v1/papers', (request, response) => {
//     database('footnotes').select()
//       .then((footnotes) => {
//         response.status(200).json(footnotes);
//       })
//       .catch((error) => {
//         response.status(500).json({ error });
//       });
//   });

//   app.post('/api/v1/papers', (request, response) => {
//     const newPaper = request.body;
//       if (!newPaper.title && !newPaper.author) {
//         return response
//           .status(422)
//           .send({ error: `Expected { title: <String>, author: <String> }. You're missing info. you sent ${newPaper.title}` });
//       }
//     database('papers').insert(newPaper, 'id')
//       .then(paper => {
//         response.status(201).json({ id: paper[0] })
//       })
//       .catch(error => {
//         response.status(500).json({ error });
//       });
//   });