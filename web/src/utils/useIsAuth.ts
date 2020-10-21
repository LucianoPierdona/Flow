import { useEffect } from "react";
import { useHistory } from "react-router";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const history = useHistory();

  useEffect(() => {
    if (!fetching && !data?.me) {
      history.push("/login");
    }
  }, [fetching, data, history]);
};
