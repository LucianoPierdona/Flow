import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMeQuery, useDeletePostMutation } from "../../../generated/graphql";

interface DeletePodcastButtonProps {
  id: number;
  creatorId: number;
}

const DeletePodcastButton: React.FC<DeletePodcastButtonProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <FaTrash
      className="trash-icon"
      onClick={() => {
        deletePost({ id });
      }}
    />
  );
};

export default DeletePodcastButton;
