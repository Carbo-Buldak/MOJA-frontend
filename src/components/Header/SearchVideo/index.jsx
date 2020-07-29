import React, { useState } from 'react';

import * as S from './style';
import * as Icon from '../../../assets/index';

const SearchVideo = ({ searchVideoForKeyWord }) => {
  const [keyWord, setKeyWord] = useState('');

  const changeKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <S.SearchBox>
      <S.SearchInput type="text" value={keyWord} onChange={changeKeyWord} />
      <S.SearchButton
        src={Icon.feed.search}
        onClick={() => searchVideoForKeyWord(keyWord)}
      />
    </S.SearchBox>
  );
};

export default SearchVideo;
