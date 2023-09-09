import React from "react";
import { Track } from "types";

const ArtistTrackCard: React.FC<{ serialNumber: number; track: Track }> = ({
  serialNumber,
  track,
}) => {
  const { duration, title } = track;
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/5">{serialNumber}</div>
      <div className="w-3/5">{title}</div>
      <div className="w-1/5">{duration}</div>
    </div>
  );
};

export default ArtistTrackCard;
