import React from 'react';

import { VideoCategory } from '../../../components';
const CategoryContainer = (categoryName, width) => {
  return (
    <div>
      <VideoCategory categoryName={categoryName} width={width} />
    </div>
  );
};

export default CategoryContainer;
