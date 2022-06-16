/**
 * @generated SignedSource<<69b749483b3d5c96f8f4809deb2530a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Pokemon_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonName_pokemon"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonType_pokemon"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Pokemon_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3577282166f745211f43a5e6cf909e0f",
    "id": null,
    "metadata": {},
    "name": "Pokemon_Query",
    "operationKind": "query",
    "text": "query Pokemon_Query {\n  pokemon {\n    ...PokemonName_pokemon\n    ...PokemonType_pokemon\n  }\n}\n\nfragment PokemonName_pokemon on Pokemon {\n  name\n}\n\nfragment PokemonType_pokemon on Pokemon {\n  type\n}\n"
  }
};

node.hash = "412745838d067e11c499cf611349397b";

module.exports = node;
