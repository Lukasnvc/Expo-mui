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

export const fetchSearchImages = (text: string): Promise<PixabayImage[]> => {
  // return axios.get(`https://pixabay.com/api/?key=34412167-d9754ba34b766ce0503b195b8&q=${text}` )
  //   .then((response) => response.data.hits)
    return axios.get(URL, { params: { key: KEY, q: text } })
    .then((response) => response.data.hits)
}

export const fetchByIdImage = (id: number): Promise<PixabayImage[]> => {
  console.log(id)
  return axios.get(URL, { params: { key: KEY, id: id } })
  .then((response) => response.data.hits)
}