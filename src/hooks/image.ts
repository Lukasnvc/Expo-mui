import { fetchImages, fetchRandomImage } from "../api/images";

import { PixabayImage } from "../api/imageTypes";
import { useQuery } from "@tanstack/react-query";

const IMAGES = "IMAGES";

export const useImages = (page:number) => {
  return useQuery<PixabayImage[], Error>([IMAGES, page], () => fetchImages(page))
}

export const useRandomImage = () => {
  return useQuery<PixabayImage[], Error>([IMAGES], fetchRandomImage)
}