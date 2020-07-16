const getVideoThumbnail = (youtubeId) => {
  const videoThumbnail = `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  return videoThumbnail;
};

export default getVideoThumbnail;