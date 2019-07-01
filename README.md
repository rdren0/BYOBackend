# Build Your Own Backend

## Overview:

BYOB is a solo project with the goal of learning how to create your own backend server with endpoints using Express, Knex, and Postgres.

## To begin:

### Backend

Clone this repo: `$ git clone https://github.com/rdren0/BYOBackend`

Once in this directory: `$ npm i`

Launch in browser: `$ nodemon server.js`

## Endpoint Details

### GET /api/v1/states

If the request is successful you will get back an array of objects, of states.

```
[
    { id: 100,
      name: "Arkansas",
      population: 3004279,
      area: 137732,
      capital: "Little Rock"
    },
    { id: 101,
      name: "California",
      population: 39536653,
      area: 423967,
      capital: "Sacramento"
    }
]
```


### GET /api/v1/states/:id

If the request is successful you will get back the state with the matching id.

```
{     id: 203
      name: "Hawaii",
      population: 1427538,
      area: 28313,
      capital: "Honolulu"
      }
```

### POST /api/v1/states

If the request is successful you will get back the id of the state you entered.


```
{
  id:506
}
```


### GET /api/v1/parks

If the request is successful you will get back an array of objects, of parks.

```
[
     {
        "name": "Kenai Fjords",
        "area": 2710,
        "location_id: 77,
        "visitors": 321596
      },
      {
        "name": "Lake Clark",
        "area": 10602,
        "location_id: 25,
        "visitors": 14479
      },
      {
        "name": "Wrangell–St. Elias ",
        "area": 33682.6,
        "location_id: 54,
        "visitors": 79450
      },
      {
        "name": "Denali",
        "area": 19185.8,
        "location_id: 23,
        "visitors": 594660
      }
]
```


### GET /api/v1/parks/:id

If the request is successful you will get back the park with the matching id.
```
{     "name": "Gateway Arch",
        "area": 0.8,
        "locatoin_id": 55,
        "visitors": 2016180
      }
```

### POST /api/v1/parks

If the request is successful you will get back the id of the park you entered.


```
{
  id:77
}
```

   
### DELETE /api/v1/states/:id

If the request is successful it will return a message with the specified id.


```
`State with id of: ${id}, has been deleted, along with its associated parks.`
```

