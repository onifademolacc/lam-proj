import React, { useState } from "react";
import { HttpGet } from "services";
import { Track } from "types";
import { API_ROUTES } from "utils";

const useSearch = () => {
  const [tracks, setTracks] = useState<Track[] | []>([]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const reset = () => {
    setTracks([]);
    setNotFound(false);
  };

  const fetchTrack = async (track: string) => {
    setLoading(true);
    setNotFound(false);
    const result: any = await HttpGet(`${API_ROUTES.SEARCH_ALBUM}`, {
      q: track,
    });

    if (
      (result && result.error) ||
      (result.name && result.name === "AxiosError")
    )
      return setNotFound(true);
    setTracks(result.data);
  };

  return {
    tracks,
    loading,
    notFound,
    fetchTrack,
    reset,
  };
};

export default useSearch;
