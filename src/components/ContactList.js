import React from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton.js'

class ContactList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.globalStore.map((item, index) => 
            <li key={index}>
              {item.name + ' ' + item.phone}
              <DeleteButton />
            </li>
          )}
      </ul>
    );
  }
}

export default connect(
  state => ({
    globalStore: state.initialList.filter(person => 
      person.name
        .toLowerCase()
        .includes(state.initialInput.toLowerCase()))
  }),
  dispatch => ({
    
  })
)(ContactList);