const statesData = require("./../../../data");

const createState = (knex, state) => {
  return knex('states').insert({
    name: state.name,
    population: parseInt(state.population),
    area: parseInt(state.area),
    capital: state.capital
  }, 'id')

};

const createPark = (knex, park) => {
  return knex('parks').insert({
    name: park.name,
    area: parseInt(park.area),
    visitors: parseInt(park.visitors),
    location_id: parseInt(park.stateId)
  });
};

exports.seed = (knex) => {
  return knex('parks').del()
    .then(() => knex('states').del())
    .then(() => {
      let statePromises = [];
      statesData.forEach(state => {
        statePromises.push(createState(knex, state));
      });

      return Promise.all(statePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};