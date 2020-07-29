import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { searchVideoReq } from '../../../lib/api';
import { SearchVideo } from '../../../components';
import { getSearchVideo } from '../../../modules/videoList/searchVideoList/searchVideoList';
const SearchVideoContainer = ({ getSearchVideo }) => {
  const history = useHistory();

  const searchVideoForKeyWord = (keyWord) => {
    searchVideoReq(keyWord)
      .then((videoList) => {
        console.log(videoList);
        getSearchVideo(videoList);
        history.push('/search');
      })
      .catch((e) => {
        console.log(e);
        alert('검색에 실패하였습니다');
      });
  };
  return <SearchVideo searchVideoForKeyWord={searchVideoForKeyWord} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchVideo: (videoList) => dispatch(getSearchVideo(videoList)),
  };
};
export default connect(null, mapDispatchToProps)(SearchVideoContainer);
