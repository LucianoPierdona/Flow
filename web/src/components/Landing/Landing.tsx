import { withUrqlClient } from "next-urql";
import React from "react";
import { usePodcastsQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NavBar from "../NavBar/NavBar";
import PodcastCard from "../PodcastCard/PodcastCard";
import { LandingStaticContent } from "./components/LandingStaticContent";
import { PodcastList } from "./style";

const Landing = () => {
  const [{ data }] = usePodcastsQuery();
  console.log(data);
  return (
    <>
      <NavBar />
      <LandingStaticContent />
      <PodcastList>
        {!data ? (
          <div>Loading...</div>
        ) : (
          data.podcasts.map((p) => (
            <PodcastCard
              title={p.title}
              url={p.url}
              id={p.id}
              thumbnail={p.thumbnail}
              description={p.description}
              creatorId={p.creatorId}
            />
          ))
        )}
      </PodcastList>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Landing);
