import React from "react";
import { PodcastCardStyle } from "./styles";
import DeletePodcastButton from "./components/DeletePodcastButton";

interface PodcastCardProps {
  url: string;
  title: string;
  thumbnail: string;
  id: any;
  description: string;
  creatorId: number;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  url,
  title,
  thumbnail,
  id,
  description,
  creatorId,
}) => {
  return (
    <PodcastCardStyle key={id}>
      <div className="img-block">
        <img src={thumbnail} alt={title} />
      </div>

      <div>
        <a href={url}>
          <h1>{title}</h1>
          <p>{description?.slice(0, 30)}</p>
        </a>
        <div className="icons-block">
          <DeletePodcastButton id={id} creatorId={creatorId} />
        </div>
      </div>
    </PodcastCardStyle>
  );
};

export default PodcastCard;
