import React from "react";
import { Album } from "types";

const AlbumCard: React.FC<Album> = ({ cover_medium, title }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={cover_medium} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default AlbumCard;
