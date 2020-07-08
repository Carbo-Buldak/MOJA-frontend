import React from 'react';

import * as S from './style';
import * as Icon from '../../../assets/index';

const SearchVideo = () => {
  return (
    <S.SearchBox>
      <S.SearchInput type="text" />
      <S.SearchButton src={Icon.feed.search} />
    </S.SearchBox>
  );
};

export default SearchVideo;
