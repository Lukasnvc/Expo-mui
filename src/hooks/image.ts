import { fetchImages, fetchRandomImage } from "../api/images";

import { PixabayImage } from "../api/imageTypes";
import { useQuery } from "@tanstack/react-query";

const IMAGES = "IMAGES";

export const useImages = () => {
  return useQuery<PixabayImage[], Error>([IMAGES], fetchImages)
}

export const useRandomImage = () => {
  return useQuery<PixabayImage[], Error>([IMAGES], fetchRandomImage)
}