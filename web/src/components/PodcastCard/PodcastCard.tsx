import React from "react";
import { useDeletePostMutation } from "../../generated/graphql";
import { PodcastCardStyle } from "./styles";
import { FaTrash } from "react-icons/fa";

interface PodcastCardProps {
  url: string;
  title: string;
  thumbnail?: string;
  id: any;
  description?: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  url,
  title,
  thumbnail,
  id,
  description,
}) => {
  const [, deletePost] = useDeletePostMutation();
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
          <FaTrash
            className="trash-icon"
            onClick={() => {
              console.log(id);
              deletePost({ id });
            }}
          />
        </div>
      </div>
    </PodcastCardStyle>
  );
};

export default PodcastCard;
