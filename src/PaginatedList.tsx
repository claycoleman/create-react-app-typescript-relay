import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";
import { PaginatedListFragment$key } from "./__generated__/PaginatedListFragment.graphql";
import { PaginatedListPaginationQuery } from "./__generated__/PaginatedListPaginationQuery.graphql";

type Props = { query: PaginatedListFragment$key };
function PaginatedList(props: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment<
    PaginatedListPaginationQuery,
    PaginatedListFragment$key
  >(
    graphql`
      fragment PaginatedListFragment on Query
      @refetchable(queryName: "PaginatedListPaginationQuery") {
        paginatedPlaylists: followedPlaylists(first: $count, after: $cursor)
          @connection(key: "PaginatedList_paginatedPlaylists") {
          edges {
            node {
              id
              imageUrl
              name
              description
              trackCount
            }
          }
        }
      }
    `,
    props.query,
  );
  const playlists = (data.paginatedPlaylists?.edges ?? []).map(
    (edge) => edge.node,
  );
  const loadedPlaylistCount = playlists.length;
  return (
    <div>
      <h2>Paginated Playlists</h2>
      <h4>{loadedPlaylistCount} loaded</h4>
      <p>
        {hasNext ? <button onClick={() => loadNext(10)}>Load more</button> : "All playlists loaded"}
      </p>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          {playlist.name}: {playlist.trackCount} tracks
        </li>
      ))}
    </div>
  );
}

export default PaginatedList;
