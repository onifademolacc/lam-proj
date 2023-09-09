export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const API_ROUTES = {
  SEARCH_ALBUM: "/search/album",
  ARTIST: "/artist",
  ARTIST_TOP_TRACKS: "/artist",
};
