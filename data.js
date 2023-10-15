const caviteDivision = {
    "CENTRAL DISTRICT": [
      "Alapan",
      "Anabu",
      "Area-C",
      "Area-E",
      "Area-G",
      "Bahayang Pagasa",
      "Dasmariñas",
      "Imus",
      "Langkaan",
      "Malagasang",
      "Paliparan",
      "Piela",
      "Salawag",
      "Salitran",
      "San Jose"
    ],
    "NORTH DISTRICT": [
      "Addas",
      "Mabolo",
      "Mambog",
      "Molino",
      "Nazareth",
      "Panapaan 1",
      "Panapaan 2",
      "Queen's Row",
      "Springville",
      "Talaba"
    ],
    "EAST DISTRICT": [
      "Alfonso",
      "Amadeo",
      "Bailen",
      "Bancal",
      "Biga",
      "Bulihan",
      "Carmona",
      "Kabulusan",
      "Kaong",
      "Magallanes",
      "Magra",
      "Malabag",
      "Mandarin",
      "Mendez",
      "Pulido",
      "San Jose",
      "Tagaytay",
      "Tartaria",
      "Tibig"
    ],
    "WEST DISTRICT": [
      "Cavite City",
      "General Trias",
      "Kawit",
      "Noveleta",
      "Pascam",
      "Rosario",
      "Wawa"
    ],
    "SOUTH DISTRICT": [
      "Aguado",
      "Amaya",
      "Bagtas",
      "Biclatan",
      "Buenavista",
      "Cabuco",
      "Hugo Perez",
      "Indang",
      "Inocencio",
      "Mabacao",
      "Mabilog",
      "Naic Acacia",
      "Naic Calubcob",
      "Naic San Roque",
      "Pabahay",
      "Paradahan",
      "Sunny Brooke",
      "Tanza",
      "Ternate",
      "Trece Martires"
    ]
  };


  const caviteDivisionWithKeys = {};

let uniqueKeyCounter = 1;

for (const district in caviteDivision) {
  const districtArray = caviteDivision[district];
  caviteDivisionWithKeys[district] = districtArray.map(value => ({
    key: `LC${uniqueKeyCounter++}`, // Unique key generation
    value
  }));
}

export default caviteDivisionWithKeys;