import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { AppProfileQuery } from "./__generated__/AppProfileQuery.graphql";
import List from "./List";
import PaginatedList from "./PaginatedList";

function App() {
  // used with a Spotify profile app
  const data = useLazyLoadQuery<AppProfileQuery>(
    graphql`
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
                }
              }
            }
            trackCount
          }
        }
        ...PaginatedListFragment
      }
    `,
    {
      count: 20
    },
  );
  const [showPaginatedList, setShowPaginatedList] = useState(false);
  if (data.profile == null) {
    return (
      <div className="App">
        <header className="App-header">
          <div>You are logged out</div>
          <button
            onClick={() =>
              (window.location.href =
                "http://127.0.0.1:8000/social/login/spotify/")
            }
            name="Log In"
          >
            Log In
          </button>
        </header>
      </div>
    );
  }

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>You are {data.profile?.user?.name}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>
        <button onClick={() => setShowPaginatedList((oldValue) => !oldValue)}>
          Toggle Lists
        </button>
      </p>
      {showPaginatedList ? (
        <PaginatedList query={data} />
      ) : (
        <List playlists={data.followedPlaylists?.nodes ?? []} />
      )}
    </>
  );
}

function AppWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="App">
      <header className="App-header">{props.children}</header>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <AppWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </AppWrapper>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
