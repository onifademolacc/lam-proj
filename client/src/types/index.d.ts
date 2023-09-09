export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
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

//artist top 5 tracks
// http://api.deezer.com/artist/13/top?limit=5
// https://api.deezer.com/artist/27
//https://api.deezer.com/search/album?q=eminem
