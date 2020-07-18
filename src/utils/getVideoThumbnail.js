const getVideoThumbnail = (youtubeId) => {
  const videoThumbnail = `http://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  return videoThumbnail;
};

export default getVideoThumbnail;