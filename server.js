const express = require("express");
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.listen(PORT, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

app.get("/", (req, res) => {
  res.status(200).json("Hello world!");
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json("You have not selected a path");
});

app.get("/api/v1/parks", (request, response) => {
  database("parks")
    .select()
    .then(parks => {
      console.log(parks);
      response.status(200).json(parks);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
  console.log("Hello world");
});

app.get("/api/v1/states", (request, response) => {
  database("states")
    .select()
    .then(states => {
      response.status(200).json(states);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post("/api/v1/states", (request, response) => {
  const state = request.body;
  console.log(state);
  // if (state.name && state.population && state.area && state.capital) {
    database("states")
      .insert(state, "id")
      .then(state => {
        response.status(201).json({ id: state[0] });
      })
      .catch(error => {
        response.status(500).json({ error });
      });
  // } else {
  //   return response
  //     .status(422)
  //     .send({
  //       error: `Expected { name: <String>, population: <Number>, area: <Number> capital: <String> }. You're missing info.`
  //     });
  // }
});
