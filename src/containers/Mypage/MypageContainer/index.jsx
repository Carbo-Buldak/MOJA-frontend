import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Mypage } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getSavedSubtitleList } from '../../../modules/writeSubtitle/writeSubtitle';
import { getUserData } from '../../../modules/mypage';
import { getUserDataReq } from '../../../lib/api';

const MypageContainer = ({
  userData,
  getSelectedVideoUrl,
  getSavedSubtitleList,
  getUserData,
}) => {
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token !== null) {
      getUserDataReq(token)
        .then((userData) => {
          getUserData(userData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <div>
      <Mypage
        userData={userData}
        getSelectedVideoUrl={getSelectedVideoUrl}
        getSavedSubtitleList={getSavedSubtitleList}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.mypage.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedVideoUrl: (videoUrl, videoTitle) =>
      dispatch(getSelectedVideoUrl(videoUrl, videoTitle)),
    getSavedSubtitleList: (subtitleList) =>
      dispatch(getSavedSubtitleList(subtitleList)),
    getUserData: (userData) => dispatch(getUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MypageContainer);
