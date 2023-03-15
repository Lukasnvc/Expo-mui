import { VideoData } from "./videoTypes";
import axios from "axios";

const URL = 'https://pixabay.com/api/videos/'
const KEY = '34412167-d9754ba34b766ce0503b195b8'

export const fetchVideos = (): Promise<VideoData[]> => {
  return axios.get(URL, { params: { key: KEY } })
  .then((response) => response.data.hits)
};