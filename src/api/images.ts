import { PixabayImage } from "./imageTypes";
import axios from "axios";
import { getRandomNumber } from "../assets/consts";

const URL = 'https://pixabay.com/api/'
const KEY = '34412167-d9754ba34b766ce0503b195b8'

export const fetchImages = (page:number): Promise<PixabayImage[]> => {
  return axios.get(URL, { params: { key: KEY, page } })
  .then((response) => response.data.hits)
};

export const fetchRandomImage = (): Promise<PixabayImage[]> => {
  return axios.get(URL, { params: { key: KEY, id: getRandomNumber() } })
  .then((response) => response.data.hits)
}