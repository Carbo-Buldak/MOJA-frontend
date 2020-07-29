import React, { useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getApplyData } from '../../../modules/apply/apply';
import { ApplyModal } from '../../../components';
import { changeModal, modalTypes } from '../../../modules/modal/modal';
import { applyVideoReq } from '../../../lib/api';

const ApplyContainer = ({ changeModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem('token');

  const setApplyData = useCallback((title, url) => {
    console.log(title, url);
    applyVideoReq(url, title, token)
      .then(() => {
        alert('요청에 성공했습니다');
        changeModal(modalTypes.none);
        history.push('/');
      })
      .catch((e) => {
        if (e.response.status === 201) {
          alert('요청에 성공했습니다');
          changeModal(modalTypes.none);
          history.push('/');
        } else {
          alert('요청에 실패했습니다');
        }
      });
    dispatch(getApplyData(title, url));
  }, []);

  return (
    <div>
      <ApplyModal getApplyData={setApplyData} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    changeModal: (modalType) => dispatch(changeModal(modalType)),
  };
}

export default connect(null, mapDispatchToProps)(ApplyContainer);
