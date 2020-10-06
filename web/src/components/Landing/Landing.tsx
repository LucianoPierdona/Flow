import { withUrqlClient } from "next-urql";
import React from "react";
import { usePodcastsQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NavBar from "../NavBar/NavBar";
import { LandingStaticContent } from "./components/LandingStaticContent";

const Landing = () => {
  const [{ data }] = usePodcastsQuery();
  console.log(data);
  return (
    <>
      <NavBar />
      <LandingStaticContent />
      {!data ? (
        <div>Loading...</div>
      ) : (
        data.podcasts.map((p) => <div key={p.title}>{p.url}</div>)
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Landing);
