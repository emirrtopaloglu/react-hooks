import { useMemo } from "react";

interface Query {
  get: (key: string) => string | null;
  getAll: (key: string) => string[];
  has: (key: string) => boolean;
  set: (key: string, value: string) => void;
  size?: number;
}

const useQuery = (): Query => {
  const search = window.location.search;
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
