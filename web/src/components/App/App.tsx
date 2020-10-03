import React from "react";
import { createClient, Provider } from "urql";
import Routes from "../../Routes";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function App() {
  return (
    <Provider value={client}>
      <Routes />
    </Provider>
  );
}

export default App;
