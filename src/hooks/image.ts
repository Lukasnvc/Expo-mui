import { fetchByIdImage, fetchImages, fetchRandomImage, fetchSearchImages } from "../api/images";

import { PixabayImage } from "../api/imageTypes";
import { useQuery } from "@tanstack/react-query";

const IMAGES = "IMAGES";

export const useImages = (page:number) => {
  return useQuery<PixabayImage[], Error>([IMAGES, page], () => fetchImages(page))
}

export const useRandomImage = () => {
  return useQuery<PixabayImage[], Error>([IMAGES], fetchRandomImage)
}

export const useSearchImage = (text:string) => {
  return useQuery<PixabayImage[], Error>([IMAGES, text], () => fetchSearchImages(text))
}

export const useImageById = (id: number) => {
  return useQuery<PixabayImage[], Error>([IMAGES], () => fetchByIdImage(id))
}