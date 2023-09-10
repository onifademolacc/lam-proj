import React from "react";
import useSearch from "hooks/useSearch";

const SearchResult = () => {
  const { tracks, loading, notFound } = useSearch();

  return <div>SearchResult</div>;
};

export default SearchResult;
