import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { ListFragment$key } from "./__generated__/ListFragment.graphql";

type Props = { playlists: ListFragment$key };
function List(props: Props) {
  const playlists = useFragment(
    graphql`
      fragment ListFragment on PlaylistType @relay(plural: true) {
        id
        imageUrl
        name
        description
        trackCount
      }
    `,
    props.playlists,
  );
  return (
    <div>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}: {playlist.trackCount} tracks</li>
      ))}
    </div>
  );
}

export default List;
