import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <ul>
        {this.props.globalStore.map((item, index)=> <li key={index}>{item.name + ' ' + item.phone}</li>)}
      </ul>
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