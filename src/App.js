import React from 'react';
import { connect } from 'react-redux';
import ContactList from './components/ContactList'
import InputFilter from './components/InputFilter'

class App extends React.Component{
  render(){

    return(
        <div>
            <InputFilter/>
            <ContactList/>
        </div>
    );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({
    
  })
)(App);