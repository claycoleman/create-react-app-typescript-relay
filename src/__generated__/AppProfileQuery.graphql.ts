/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppProfileQueryVariables = {
    count?: number | null;
    cursor?: string | null;
};
export type AppProfileQueryResponse = {
    readonly profile: {
        readonly __typename: string;
        readonly id: string;
        readonly user: {
            readonly id: string;
            readonly username: string;
            readonly name: string | null;
        } | null;
    } | null;
    readonly followedPlaylists: {
        readonly count: number;
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly spotifyId: string | null;
            readonly name: string | null;
            readonly description: string | null;
            readonly trackEdges: {
                readonly count: number;
                readonly nodes: ReadonlyArray<{
                    readonly id: string;
                    readonly track: {
                        readonly localFile: boolean | null;
                    } | null;
                }>;
            } | null;
            readonly trackCount: number | null;
            readonly " $fragmentRefs": FragmentRefs<"ListFragment">;
        }>;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"PaginatedListFragment">;
};
export type AppProfileQuery = {
    readonly response: AppProfileQueryResponse;
    readonly variables: AppProfileQueryVariables;
};



/*
query AppProfileQuery(
  $count: Int
  $cursor: String
) {
  profile {
    __typename
    id
    user {
      id
      username
      name
    }
  }
  followedPlaylists(first: 20) {
    count
    nodes {
      ...ListFragment
      id
      spotifyId
      name
      description
      trackEdges(first: 10) {
        count
        nodes {
          id
          track {
            localFile
            id
          }
        }
      }
      trackCount
    }
  }
  ...PaginatedListFragment
}

fragment ListFragment on PlaylistType {
  id
  imageUrl
  name
  description
  trackCount
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "SpotifyProfileType",
  "kind": "LinkedField",
  "name": "profile",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "UserType",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "spotifyId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "localFile",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trackCount",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v13 = [
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
    "name": "AppProfileQuery",
    "selections": [
      (v4/*: any*/),
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "PlaylistConnection",
        "kind": "LinkedField",
        "name": "followedPlaylists",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PlaylistType",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "PlaylistTrackAssociationConnection",
                "kind": "LinkedField",
                "name": "trackEdges",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaylistTrackAssociationType",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrackType",
                        "kind": "LinkedField",
                        "name": "track",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "trackEdges(first:10)"
              },
              (v11/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ListFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "followedPlaylists(first:20)"
      },
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
    "name": "AppProfileQuery",
    "selections": [
      (v4/*: any*/),
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "PlaylistConnection",
        "kind": "LinkedField",
        "name": "followedPlaylists",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PlaylistType",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v12/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              (v11/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "PlaylistTrackAssociationConnection",
                "kind": "LinkedField",
                "name": "trackEdges",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaylistTrackAssociationType",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrackType",
                        "kind": "LinkedField",
                        "name": "track",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "trackEdges(first:10)"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "followedPlaylists(first:20)"
      },
      {
        "alias": "paginatedPlaylists",
        "args": (v13/*: any*/),
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
                  (v2/*: any*/),
                  (v12/*: any*/),
                  (v3/*: any*/),
                  (v8/*: any*/),
                  (v11/*: any*/),
                  (v1/*: any*/)
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
        "args": (v13/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PaginatedList_paginatedPlaylists",
        "kind": "LinkedHandle",
        "name": "followedPlaylists"
      }
    ]
  },
  "params": {
    "cacheID": "fdc5a29933030fc88bda22e85859f0c0",
    "id": null,
    "metadata": {},
    "name": "AppProfileQuery",
    "operationKind": "query",
    "text": "query AppProfileQuery(\n  $count: Int\n  $cursor: String\n) {\n  profile {\n    __typename\n    id\n    user {\n      id\n      username\n      name\n    }\n  }\n  followedPlaylists(first: 20) {\n    count\n    nodes {\n      ...ListFragment\n      id\n      spotifyId\n      name\n      description\n      trackEdges(first: 10) {\n        count\n        nodes {\n          id\n          track {\n            localFile\n            id\n          }\n        }\n      }\n      trackCount\n    }\n  }\n  ...PaginatedListFragment\n}\n\nfragment ListFragment on PlaylistType {\n  id\n  imageUrl\n  name\n  description\n  trackCount\n}\n\nfragment PaginatedListFragment on Query {\n  paginatedPlaylists: followedPlaylists(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        imageUrl\n        name\n        description\n        trackCount\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '53d726ab78f4601f81bfdb3c44cafb22';
export default node;
