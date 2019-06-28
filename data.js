const data = [
    {      name: "Alabama",
      population: 4874747,
      area: 135767,
      capital: "Montgomery",
      parks:[]
    },
    {      name: "Alaska",
      population: 739795,
      area: 1723337,
      capital: "Juneau",
      parks:[{
        "name": "Glacier Bay",
        "area": 13044.6,
        "visitors": 597915
      },
      {
        "name": "Katmai",
        "area": 4870.3,
        "visitors": 37818
      },
      {
        "name": "Kenai Fjords",
        "area": 2710,
        "visitors": 321596
      },
      {
        "name": "Lake Clark",
        "area": 10602,
        "visitors": 14479
      },
      {
        "name": "Wrangell–St. Elias ",
        "area": 33682.6,
        "visitors": 79450
      },
      {
        "name": "Denali",
        "area": 19185.8,
        "visitors": 594660
      },
      {
        "name": "Kobuk Valley",
        "area": 7084.9,
        "visitors": 14937
      },
      {
        "name": "Gates of the Arctic",
        "area": 30448.1,
        "visitors": 9591
      }]
    },
    {      name: "Arizona",
      population: 7016270,
      area: 295234,
      capital: "Phoenix",
      parks:[{
        "name": "Saguaro",
        "area": 371.2,
        "visitors": 957405
      },
      {
        "name": "Petrified Forest",
        "area": 895.9,
        "visitors": 644922
      },
      {
        "name": "Grand Canyon ",
        "area": 4862.9,
        "visitors": 6380495
      }]
    },
    {      name: "Arkansas",
      population: 3004279,
      area: 137732,
      capital: "Little Rock",
      parks:[
      {
        "name": "Hot Springs",
        "area": 22.5,
        "visitors": "1506887"
      }]
    },
    {      name: "California",
      population: 39536653,
      area: 423967,
      capital: "Sacramento",
      parks:[{
        "name": "Death Valley",
        "area": 1009.9,
        "visitors": 1678660
      },
      {
        "name": "Joshua Tree",
        "area": 3199.6,
        "visitors": 2942382
      },
      {
        "name": "Channel Islands",
        "area": 1009.9,
        "visitors": 366250
      },
      {
        "name": "Sequoia",
        "area": 1635.20,
        "visitors": 1229594
      },
      {
        "name": "Pinnacles",
        "area": 108,
        "visitors": 222152
      },
      {
        "name": "Kings Canyon",
        "area": 1869.2,
        "visitors": 699023
      },
      {
        "name": "Yosemite ",
        "area": 3082.7,
        "visitors": 4009436
      },
      {
        "name": "Lassen Volcanic",
        "area": 431.4,
        "visitors": 499435
      },
      {
        "name": "Redwood ",
        "area": 562.5,
        "visitors": 482536
      }]
    },
    {      name: "Colorado",
      population: 5607154,
      area: 269601,
      capital: "Denver",
      parks:[{
        "name": "Mesa Verde ",
        "area": 212.4,
        "visitors": 563420
      },
      {
        "name": "Great Sand Dunes",
        "area": 434.4,
        "visitors": 442905
      },
      {
        "name": "Black Canyon of the Gunnison",
        "area": 212.4,
        "visitors": 308962
      },
      {
        "name": "Rocky Mountain",
        "area": 1075.6,
        "visitors": 4590493
      }]
    },
    {      name: "Connecticut",
      population: 3588184,
      area: 14357,
      capital: "Hartford",
      parks:[]
    },
    {      name: "Delaware",
      population: 961939,
      area: 6446,
      capital: "Dover",
      parks:[]
    },
    {      name: "Florida",
      population: 20984400,
      area: 170312,
      capital: "Tallahassee",
      parks:[{
        "name": "Dry Tortugas",
        "area": 261.8,
        "visitors": 56810
      },
      {
        "name": "Everglades",
        "area": 6106.40,
        "visitors": 597124
      },
      {
        "name": "Biscayne",
        "area": 700,
        "visitors": 469253
      }]
    },
    {
      name: "Georgia",
      population: 10429379,
      area: 153910,
      capital: "Atlanta",
      parks:[]
    },
    {
      name: "Hawaii",
      population: 1427538,
      area: 28313,
      capital: "Honolulu",
      parks:[{
        "name": "Hawaiʻi Volcanoes",
        "area": 1308.90,
        "visitors": 1116891
      },
      {
        "name": "Haleakalā",
        "area": 134.6,
        "visitors": 1044084
      }]
    },
    {
      name: "Idaho",
      population: 1716943,
      area: 216443,
      capital: "Boise",
      parks:[]
    },
    {
      name: "Illinois",
      population: 12802023,
      area: 149995,
      capital: "Springfield",
      parks:[]
    },
    {
      name: "Indiana",
      population: 6666818,
      area: 94326,
      capital: "Indianapolis",
      parks:[{
        "name": "Indiana Dunes",
        "area": 61,
        "visitors": 1756079
      }]
    },
    {
      name: "Iowa",
      population: 3145711,
      area: 145746,
      capital: "Des Moines",
      parks:[]
    },
    {
      name: "Kansas",
      population: 2913123,
      area: 213100,
      capital: "Topeka",
      parks:[]
    },
    {
      name: "Kentucky",
      population: 4454189,
      area: 104656,
      capital: "Frankfort",
      parks:[{
        "name": "Mammoth Cave",
        "area": 218.6,
        "visitors": 533206
      }]
    },
    {
      name: "Louisiana",
      population: 4684333,
      area: 135659,
      capital: "Baton Rouge",
      parks:[]
    },
    {
      name: "Maine",
      population: 1335907,
      area: 91633,
      capital: "Augusta",
      parks:[{
        "name": "Acadia",
        "area": 198.6,
        "visitors": 3537575
      }]
    },
    {
      name: "Maryland",
      population: 6052177,
      area: 32131,
      capital: "Annapolis",
      parks:[]
    },
    {
      name: "Massachusettes",
      population: 6859819,
      area: 27336,
      capital: "Boston",
      parks:[]
    },
    {
      name: "Michigan",
      population: 9962311,
      area: 250487,
      capital: "Lansing",
      parks:[{
        "name": "Isle Royale",
        "area": 2314.00,
        "visitors": 25798
      }]
    },
    {
      name: "Minnesota",
      population: 5576606,
      area: 225163,
      capital: "St. Paul",
      parks:[{
        "name": "Voyageurs",
        "area": 883,
        "visitors": 239656
      }]
    },
    {
      name: "Mississippi",
      population: 2984100,
      area: 125438,
      capital: "Jackson",
      parks:[]
    },
    {
      name: "Missouri",
      population: 6113532,
      area: 180540,
      capital: "Jefferson City",
      parks:[{
        "name": "Gateway Arch",
        "area": 0.8,
        "visitors": 2016180
      }]
    },
    {
      name: "Montana",
      population: 1050493,
      area: 380831,
      capital: "Helena",
      parks:[{
        "name": "Glacier",
        "area": 4100.00,
        "visitors": 2965309
      }]
    },
    {
      name: "Nebraska",
      population: 1920076,
      area: 200330,
      capital: "Lincoln",
      parks:[]
    },
    {
      name: "Nevada",
      population: 2998039 ,
      area: 286380,
      capital: "Carson City",
      parks:[{
        "name": "Great Basin",
        "area": 312.3,
        "visitors": 153094
      }]
    },
    {
      name: "New Hampshire",
      population: 1342795 ,
      area: 24214,
      capital: "Concord",
      parks:[]
    },
    {
      name: "New Jersey",
      population: 9005644 ,
      area: 22591,
      capital: "Trenton",
      parks:[]
    },
    {
      name: "New Mexico",
      population: 2088070 ,
      area: 314917,
      capital: "Santa Fe",
      parks:[{
        "name": "Carlsbad Caverns ",
        "area": 189.3,
        "visitors": 465912
      }]
    },
    {
      name: "New York",
      population: 19849399,
      area: 141297,
      capital: "Albany",
      parks:[]
    },
    {
      name: "North Carolina",
      population: 10273419,
      area: 13939,
      capital: "Raleigh",
      parks:[]
    },
    {
      name: "North Dakota",
      population: 755393,
      area: 183108,
      capital: "Bismark",
      parks:[{
        "name": "Theodore Roosevelt",
        "area": 285.1,
        "visitors": 749389
      }]
    },
    {
      name: "Ohio",
      population: 11658609,
      area: 116098,
      capital: "Columbus",
      parks:[{
        "name": "Cuyahoga Valley",
        "area": 131.8,
        "visitors": 2096053
      }]
    },
    {
      name: "Oklahoma",
      population: 3930864,
      area: 181037,
      capital: "Oklahoma City",
      parks:[]
    },
    {
      name: "Oregon",
      population: 4142776,
      area: 254799,
      capital: "Salem",
      parks:[{
        "name": "Crater Lake",
        "area": 741.5,
        "visitors": 720659
      }]
    },
    {
      name: "Pennsylvania",
      population: 12805537,
      area: 119280,
      capital: "Harrisburg",
      parks:[]
    },
    {
      name: "Rhode Island",
      population: 1059639,
      area: 4001,
      capital: "Providence",
      parks:[]
    },
    {
      name: "South Carolina",
      population: 5024369,
      area: 82933,
      capital: "Columbia",
      parks:[{
        "name": "Congaree",
        "area": 107.4,
        "visitors": 145929
      }]
    },
    {
      name: "South Dakota",
      population: 869666,
      area: 199729,
      capital: "Pierre",
      parks:[{
        "name": "Wind Cave",
        "area": 137.5,
        "visitors": 656397
      },
      {
        "name": "Badlands",
        "area": 982.4,
        "visitors": 1008942
      }]
    },
    {
      name: "Tennessee",
      population: 6715984,
      area: 109153,
      capital: "Nashville",
      parks:[{
        "name": "Great Smoky Mountains",
        "area": 2114.20,
        "visitors": 11421200
      }]
    },
    {
      name: "Texas",
      population: 28304596,
      area: 695662,
      capital: "Austin",
      parks:[{
        "name": "Big Bend",
        "area": 3242.20,
        "visitors": 440091
      },
      {
        "name": "Guadalupe Mountains",
        "area": 349.5,
        "visitors": 172347
      }]
    },
    {
      name: "Utah",
      population: 3101833,
      area: 219882,
      capital: "Salt Lake City",
      parks:[{
        "name": "Zion",
        "area": 595.8,
        "visitors": 4320033
      },
      {
        "name": "Bryce Canyon",
        "area": 145,
        "visitors": 2679478
      },
      {
        "name": "Canyonlands",
        "area": 1366.20,
        "visitors": 739449
      },
      {
        "name": "Capitol Reef",
        "area": 979,
        "visitors": 1227627
      },
      {
        "name": "Arches",
        "area": 310.3,
        "visitors": 1663557
      }]
    },
    {
      name: "Vermont",
      population: 623657,
      area: 24906,
      capital: "Montpelier",
      parks:[]
    },
    {
      name: "Virginia",
      population: 8470020,
      area: 110787,
      capital: "Richmond",
      parks:[{
        "name": "Shenandoah",
        "area": 806.2,
        "visitors": 1264880
      }]
    },
    {
      name: "Washington",
      population: 7405743,
      area: 184661,
      capital: "Olympia",
      parks:[{
        "name": "Mount Rainier",
        "area": 956.6,
        "visitors": 1518491
      },
      {
        "name": "Olympic",
        "area": 3733.80,
        "visitors": 3104455
      },
      {
        "name": "North Cascades",
        "area": 2042.80,
        "visitors": 30085
      }]
    },
    {
      name: "West Virginia",
      population: 1815857,
      area: 62756,
      capital: "Charleston",
      parks:[]
    },
    {
      name: "Wisconsin",
      population: 5795483 ,
      area: 169635,
      capital: "Madison",
      parks:[]
    },
    {
      name: "Wyoming",
      population: 579315,
      area: 253335,
      capital: "Cheyenne",
      parks:[{
        "name": "Yellowstone",
        "area": 8983.20,
        "visitors": 4115000
      },
      {
        "name": "Grand Teton",
        "area": 1254.70,
        "visitors": 3491151
      }]
    }
  ];

  module.exports = data;
