import React from "react";
import { Track } from "types";

const TrackCard: React.FC<Track> = ({ album, artist, duration, id, title }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {album.title}
      </p>
      <a href="#">
        <img className="rounded-t-lg" src={album.cover} alt="" />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {duration}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          By {artist.name}
        </p>
      </div>
    </div>
  );
};

export default TrackCard;
