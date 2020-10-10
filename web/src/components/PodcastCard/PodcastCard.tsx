import React from "react";
import { PodcastCardStyle } from "./styles";

interface PodcastCardProps {
  url: string;
  title: string;
  thumbnail?: string;
  id: number;
  description?: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  url,
  title,
  thumbnail,
  id,
  description,
}) => {
  console.log(thumbnail);
  console.log(url);
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
      </div>
    </PodcastCardStyle>
  );
};

export default PodcastCard;
