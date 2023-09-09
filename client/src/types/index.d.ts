export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_fan: string;
  tracklist: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_medium: string;
  tracklist: string;
}

export interface Track {
  id: number;
  title: string;
  title_short: string;
  link: string;
  duration: number;
  rank: number;
  artist: Artist;
  album: Album;
}

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

export interface TrackSearchResult {
  data: Track[];
  total: number;
  next: string;
}

export interface ErrorResult {
  error: any;
}

export type SearchResult = TrackSearchResult | ErrorResult;

// GET Tracks
// https://api.deezer.com/search/track?q=eminem

// GET Artist top 5 tracks
// http://api.deezer.com/artist/13/top?limit=5

// GET Artist albums
// https://api.deezer.com/search/album?q=eminem

// GET an album
// https://api.deezer.com/album/302127

// https://544i4jhypb.execute-api.us-east-1.amazonaws.com/prod
