import React from 'react';

import ModalContent from '../Modals/ModalContent';
import { ApplyContainer } from '../../containers';

const Apply = () => {
  return (
    <div>
      <ModalContent
        width=" 40.63rem"
        height="56.25rem"
        content={<ApplyContainer />}
      ></ModalContent>
    </div>
  );
};

export default Apply;
