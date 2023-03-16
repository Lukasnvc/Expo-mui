import { VideoData } from "../api/videoTypes";
import { fetchVideos } from "../api/videos";
import { useQuery } from "@tanstack/react-query";

const VIDEOS = "VIDEOS";

export const useVideos = (page:number) => {
  return useQuery<VideoData[], Error>([VIDEOS, page], () => fetchVideos(page))
}