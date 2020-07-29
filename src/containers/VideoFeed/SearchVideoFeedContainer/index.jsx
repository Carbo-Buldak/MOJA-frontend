import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getSelectedVideoUrl } from '../../../modules/video/video';
import { SearchVideoFeed, VideoList } from '../../../components';

const SearchVideoFeedContainer = ({ videoListData, getSelectedVideoUrl }) => {
  const history = useHistory();

  const getSubtitledVideo = () => {
    const subtitledVideo = videoListData.filter((videoItem) => {
      return videoItem.status > 0;
    });
    const getSubtitledSelectedVideoUrl = (videoUrl, videoTitle) => {
      getSelectedVideoUrl(videoUrl, videoTitle);
      history.push('/viewSubtitle');
    };
    console.log(subtitledVideo);
    return (
      <VideoList
        videoListData={subtitledVideo}
        getSelectedVideoUrl={getSubtitledSelectedVideoUrl}
      />
    );
  };

  const getRequestedVideos = () => {
    const requestedVideo = videoListData.filter((videoItem) => {
      return videoItem.status === 0;
    });
    console.log(requestedVideo);
    const getRequestedSelectedVideoUrl = (videoUrl, videoTitle) => {
      getSelectedVideoUrl(videoUrl, videoTitle);
      history.push('/writeSubtitle');
    };
    return (
      <VideoList
        videoListData={requestedVideo}
        getSelectedVideoUrl={getRequestedSelectedVideoUrl}
      />
    );
  };
  return (
    <div>
      <SearchVideoFeed
        // videoListData={videoListData}
        // getSelectedVideoUrl={getSelectedVideoUrl}
        getSubtitledVideo={getSubtitledVideo}
        getRequestedVideos={getRequestedVideos}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoListData: state.searchVideoList.videoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedVideoUrl: (videoUrl, videoTitle) =>
      dispatch(getSelectedVideoUrl(videoUrl, videoTitle)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchVideoFeedContainer);
