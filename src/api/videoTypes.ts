export type VideoData = {
  comments: number;
  downloads: number;
  duration: number;
  id: number;
  likes: number;
  pageURL: string;
  picture_id: string;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  videos: {
    large: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
    tiny: {
      url: string;
      width: number;
      height: number;
    };
  };
  views: number;
};
