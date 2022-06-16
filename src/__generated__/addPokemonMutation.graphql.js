/**
 * @generated SignedSource<<ceebc3db3cccd595c610086a153d9f6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "type"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "type",
        "variableName": "type"
      }
    ],
    "kind": "ScalarField",
    "name": "addPokemon",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addPokemonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addPokemonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dd72b18cd21b6c0f2cfa003b38c2d1ad",
    "id": null,
    "metadata": {},
    "name": "addPokemonMutation",
    "operationKind": "mutation",
    "text": "mutation addPokemonMutation(\n  $name: String!\n  $type: String!\n) {\n  addPokemon(name: $name, type: $type)\n}\n"
  }
};
})();

node.hash = "990038d31e055de4238a0c18fc3d609e";

module.exports = node;
