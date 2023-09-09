import React, { useState, useEffect } from "react";
import { HttpGet } from "service";

const useSearch = () => {
  const [tracks, setTracks] = useState([]);

  const fetchTrack = async () => {
    const result = await HttpGet();
  };

  return <div>useSearch</div>;
};

export default useSearch;
