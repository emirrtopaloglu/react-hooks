import { useMemo } from "react";

const useQuery = () => {
  const search = window.location.search;
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
