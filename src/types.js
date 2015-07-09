module.exports = {
  'normal': {
    'weak': [
      'fighting',
    ],
    'immune': [
      'ghost',
    ],
  },
  'fighting': {
    'weak': [
      'flying',
      'psychic',
      'fairy',
    ],
    'strong': [
      'rock',
      'bug',
      'dark',
    ],
  },
  'flying': {
    'weak': [
      'rock',
      'electric',
      'ice',
    ],
    'strong': [
      'fighting',
      'bug',
      'grass',
    ],
    'immune': [
      'ground',
    ],
  },
  'poison': {
    'weak': [
      'ground',
      'psychic',
    ],
    'strong': [
      'fighting',
      'poison',
      'bug',
      'grass',
      'fairy',
    ]
  },
  'ground': {
    'weak': [
      'water',
      'grass',
      'ice',
    ],
    'strong': [
      'poison',
      'rock',
    ],
    'immune': [
      'electric',
    ],
  },
  'rock': {
    'weak': [
      'fighting',
      'ground',
      'steel',
      'water',
      'grass',
    ],
    'strong': [
      'normal',
      'flying',
      'poison',
      'fire'
    ],
  },
  'bug': {
    'weak': [
      'flying',
      'rock',
      'fire',
    ],
    'strong': [
      'fight',
      'ground',
      'grass',
    ],
  },
  'ghost': {
    'weak': [
      'ghost',
      'dark',
    ],
    'strong': [
      'poison',
      'bug',
    ],
    'immune': [
      'normal',
      'fighting',
    ],
  },
  'steel': {
    'weak': [
      'fighting',
      'ground',
      'fire',
    ],
    'strong': [
      'normal',
      'flying',
      'rock',
      'bug',
      'steel',
      'grass',
      'psychic',
      'ice',
      'dragon',
      'fairy',
    ],
    'immune': [
      'poison',
    ],
  },
  'fire': {
    'weak': [
      'ground',
      'rock',
      'water',
    ],
    'strong': [
      'bug',
      'steel',
      'fire',
      'grass',
      'ice',
      'fairy',
    ],
  },
  'water': {
    'weak': [
      'grass',
      'electricity',
    ],
    'strong': [
      'steel',
      'fire',
      'water',
      'ice',
    ],
  },
  'grass': {
    'weak': [
      'flying',
      'poison',
      'bug',
      'fire',
      'ice',
    ],
    'strong': [
      'ground',
      'water',
      'grass',
      'electric',
    ],
  },
  'electric': {
    'weak': [
      'ground',
    ],
    'strong': [
      'flying',
      'steel',
      'electric',
    ],
  },
  'psychic': {
    'weak': [
      'bug',
      'ghost',
      'dark',
    ],
    'strong': [
      'fighting',
      'psychic',
    ],
  },
  'ice': {
    'weak': [
      'fighting',
      'rock',
      'steel',
      'fire',
    ],
    'strong': [
      'ice',
    ],
  },
  'dragon': {
    'weak': [
      'ice',
      'dragon',
      'fairy',
    ],
    'strong': [
      'fire',
      'water',
      'grass',
      'electric',
    ],
  },
  'dark': {
    'weak': [
      'fighting',
      'bug',
      'fairy',
    ],
    'strong': [
      'ghost',
      'dark',
    ],
    'immune': [
      'psychic',
    ],
  },
  'fairy': {
    'weak': [
      'poison',
      'steel',
    ],
    'strong': [
      'fighting',
      'rock',
      'dark',
    ],
    'immune': [
      'dragon',
    ],
  },
};
