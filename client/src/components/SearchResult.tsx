import React, { useEffect } from "react";
import useSearch from "hooks/useSearch";

const SearchResult = () => {
  const { tracks, loading, notFound } = useSearch();

  useEffect(() => {
    console.log("found status: ", notFound);
    console.log("found tracks: ", tracks);
  }, [tracks, notFound]);

  return <div>SearchResult</div>;
};

export default SearchResult;
