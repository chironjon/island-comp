import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Info from './components/info/info.component';
import HomePage from './pages/homepage/homepage.component';
import CatalogPage from './pages/catalogpage/catalogpage.component';
import Critterpedia from './pages/critterpedia/critterpedia.component';
import VillagerPage from './pages/villagerpage/villagerpage.component';
import JournalPage from './pages/journalpage/journalpage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import collection from './redux/collection/collection.data.js';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      });
    }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <h1>ACNH Island Compendium</h1>
        <Header />
        <Switch>
          <Route exact path='/island-comp' component={HomePage} />
          <Route path='/island-comp/catalog' component={CatalogPage} />
          <Route path='/island-comp/critterpedia' component={Critterpedia} {...collection}/>
          <Route path='/island-comp/villagers' component={VillagerPage} />
          <Route path='/island-comp/journal' component={JournalPage} />
          <Route 
            exact 
            path='/island-comp/login' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
        <Info />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
