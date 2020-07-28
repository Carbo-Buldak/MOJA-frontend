import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as S from './style'
import * as Icon from '../../../assets'
import {setHeaderVisibility} from '../../../modules/header/header'

const AccountWrapper = ({setHeaderVisible , accountContent}) => {
	useEffect(()=>{
		setHeaderVisible(false)
	},[])
  return (
    <S.AccountWrapper>
			<Link to="/">
      	<S.MojaLogo src={Icon.logo.moja}/>
			</Link>
			{accountContent}
    </S.AccountWrapper>
    );  
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeaderVisible: (visibility) => dispatch(setHeaderVisibility(visibility))
	}
}

export default connect(null, mapDispatchToProps)(AccountWrapper);