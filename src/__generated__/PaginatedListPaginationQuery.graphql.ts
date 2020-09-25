/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaginatedListPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
};
export type PaginatedListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PaginatedListFragment">;
};
export type PaginatedListPaginationQuery = {
    readonly response: PaginatedListPaginationQueryResponse;
    readonly variables: PaginatedListPaginationQueryVariables;
};



/*
query PaginatedListPaginationQuery(
  $count: Int
  $cursor: String
) {
  ...PaginatedListFragment
}

fragment PaginatedListFragment on Query {
  paginatedPlaylists: followedPlaylists(first: $count, after: $cursor) {
    edges {
      node {
        id
        imageUrl
        name
        description
        trackCount
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PaginatedListPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PaginatedListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PaginatedListPaginationQuery",
    "selections": [
      {
        "alias": "paginatedPlaylists",
        "args": (v1/*: any*/),
        "concreteType": "PlaylistConnection",
        "kind": "LinkedField",
        "name": "followedPlaylists",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PlaylistEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PlaylistType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageUrl",
                    "storageKey": null
                  },
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
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "trackCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "paginatedPlaylists",
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PaginatedList_paginatedPlaylists",
        "kind": "LinkedHandle",
        "name": "followedPlaylists"
      }
    ]
  },
  "params": {
    "cacheID": "13dd9db10c515254d60edf62597af4b4",
    "id": null,
    "metadata": {},
    "name": "PaginatedListPaginationQuery",
    "operationKind": "query",
    "text": "query PaginatedListPaginationQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...PaginatedListFragment\n}\n\nfragment PaginatedListFragment on Query {\n  paginatedPlaylists: followedPlaylists(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        imageUrl\n        name\n        description\n        trackCount\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cfdedbc83916ae20692474758e39d565';
export default node;
