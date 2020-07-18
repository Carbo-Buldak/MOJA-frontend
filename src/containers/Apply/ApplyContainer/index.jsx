import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getApplyData } from '../../../modules/apply/apply';

import { ApplyModal } from '../../../components';

const ApplyContainer = () => {
  const dispatch = useDispatch();

  const setApplyData = useCallback((title, url) => {
    console.log(title, url);
    dispatch(getApplyData(title, url));
  }, []);

  return (
    <div>
      <ApplyModal getApplyData={setApplyData} />
    </div>
  );
};

export default ApplyContainer;
