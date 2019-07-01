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
  res.status(200).json("You have not selected a path"); //Returns a message when neither state or park are specified
});

// Parks
app.get("/api/v1/parks", (request, response) => {
  database("parks") //From parks table
    .select() //select all parks
    .then(parks => {
      response.status(200).json(parks); //return with array of all parks if status is 200
    })
    .catch(error => {
      response.status(500).json({ error });  //return with an error message if status is 500
    });
});

app.get("/api/v1/parks/:id", (request, response) => {
  database("parks") //From parks table
    .where("id", request.params.id) //find the park that has an id matching the id paramter in quest
    .select() //select it
    .then(parks => {
      if (parks.length) return response.status(200).json(parks); //if it exists return a 200 status code and the parks that have that id
      return response
        .status(404)
        .json({ error: `Could not find park with id ${request.params.id}` }); //if the park was not found return a 404 status with an error message
    })
    .catch(error => response.status(500).json({ error })); //if the server has an issue return a status 500 
});

app.post("/api/v1/parks", (request, response) => {
  const park = request.body;
  const { name, state, area, visitors } = park;
  if (!name || !area || !visitors ||!state)
    return response.status(422).send({
      error: `Expected { name: <String>, state: <String>, area: <Number> visitors: <Number> }. You're missing info.`
    }); //if parameters are missing return a status code of 422 and an error message specifying the requirements
  database('states').where('name', state) // In the states table find a state that has the value from above as its "name" value
  .then(result => database("parks") //then take that result and while in the parks table
  .insert({"name":name,"area":area, "visitors":visitors, "location_id": result[0].id}, "id") //insert the new parks with the information specified
  .then(park => {
    response.status(201).json({ id: park[0] }); //If successfull return a 201 status code adn the id of the new park
  })
  .catch(error => {
    response.status(500).json({ error }); //if unsuccessful return a status code of 500 and an error message
  }))
});

// States
app.get("/api/v1/states", (request, response) => {
  database("states") //In states table
    .select() //select all items
    .then(states => {
      response.status(200).json(states); //return a status 200 with an array of all states
    })
    .catch(error => {
      response.status(500).json({ error }); //if the server has an error return a status of 500 with error message
    });
});
app.get("/api/v1/states/:id", (request, response) => {
  database("states") // in states table
    .where("id", request.params.id) // find a state with the specified id
    .select() //select it
    .then(states => {
      if (states.length) return response.status(200).json(states); //if it is successful return a status 200 and the state
      return response
        .status(404)
        .json({ error: `Could not find state with id ${request.params.id}` }); //if the state does not exist return a status 404 and error message
    })
    .catch(error => response.status(500).json({ error })); //if the server has an error return a status 500 and error message
});

app.post("/api/v1/states", (request, response) => {
  const state = request.body;
  const { name, population, area, capital } = state;
  if (!name || !population || !area || !capital)
    return response.status(422).send({
      error: `Expected { name: <String>, population: <Number>, area: <Number> capital: <String> }. You're missing info.`
    }); //if user does not include all required parameters, send a status 422 code and an erorr message
  database("states") // if it does have all info go to states table
    .insert(state, "id") // insert the state along with the creates id
    .then(state => {
      response.status(201).json({ id: state[0] }); // if successful return a status 200 with the id of the new state
    })
    .catch(error => {
      response.status(500).json({ error }); // if the server has an error return a status 500 and the error message
    });
});

// Delete
app.delete('/api/v1/states/:id', (request, response) => { 
  const { id } = request.params;
  if (!id) return response.status(422).json({ error: `A state with that id does not exist, try again`}); //if the id of specified state does not exist return a status of 422 and an error message
  database('parks').where('location_id', id).del() // if state does exist find parks with that location id and delete
  .then(() => database('states').where('id', id).del()) // then find state with that id and delete the state
  .then(() => response.status(204).json(`State with id of: ${id}, has been deleted, along with its associated parks.`))  //if successful return a status  204 and a success message
  .catch(error => response.status(500).json({ error })); // if server fails return a status 500 code and error message
})