import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/nooklogo.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/island-comp">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/island-comp/catalog'>Catalog</Link>
      <Link className='option' to='/island-comp/collections'>Collections</Link>
      <Link className='option' to='/island-comp/villagers'>Villagers</Link>
      <Link className='option' to='/island-comp/journal'>Journal</Link>
      {
        currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>Logout</div>
        ) : (
        <Link className='option' to='/island-comp/login'>Login</Link>
        )
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);