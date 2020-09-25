/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ListFragment = ReadonlyArray<{
    readonly id: string;
    readonly imageUrl: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly trackCount: number | null;
    readonly " $refType": "ListFragment";
}>;
export type ListFragment$data = ListFragment;
export type ListFragment$key = ReadonlyArray<{
    readonly " $data"?: ListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ListFragment">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ListFragment",
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
    }
  ],
  "type": "PlaylistType",
  "abstractKey": null
};
(node as any).hash = '7c3c52ae8a7a7d0f077e2d0152f60dc0';
export default node;
