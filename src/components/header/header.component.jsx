import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import nooklogo from '../../assets/nooklogo.png'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/island-comp">
      <img className='logo' src={nooklogo} alt='icon'></img>
    </LogoContainer>
    <OptionsContainer>
      
      <OptionLink to='/island-comp/catalog'>Catalog</OptionLink>
      <OptionLink to='/island-comp/critterpedia'>Critterpedia</OptionLink>
      <OptionLink to='/island-comp/villagers'>Villagers</OptionLink>
      <OptionLink to='/island-comp/journal'>Journal</OptionLink>
      {
        currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>Logout</OptionLink>
        ) : (
        <OptionLink to='/island-comp/login'>Login</OptionLink>
        )
      }
    </OptionsContainer>
  </HeaderContainer>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);