import React from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton.js'
import { deleteAction } from '../actions';

class ContactList extends React.Component{
  deleteMessage=(item)=>{
    let newStateFunc=(input)=>{
      let tempArr =[];
        for (let i = 0; i < input.length; i++) {
          if(input[i].name !== item){
            tempArr.push(input[i]);
          } 
        }
      return tempArr;
    }
    let newState = newStateFunc(this.props.contactList);
    this.props.deleteFromStore(newState);
  }
  render(){
    let filteredList = this.props.contactList.filter(person => 
        person.name
        .toLowerCase()
        .includes(this.props.contactInput.toLowerCase())
      );
    return(
      <ul>
        {filteredList.map((item, index) => 
            <li key={index}>
              <DeleteButton
                onDelete={this.deleteMessage}
                whichItem={item.name}/>
              {item.name + ' ' + item.phone}
            </li>
          )}
      </ul>
    );
  }
}

export default connect(
  state => ({
    contactList: state.initialList,
    contactInput: state.initialInput
  }),
  dispatch => ({
    deleteFromStore: (newStore)=>{
      dispatch(deleteAction(newStore))
    }
  })
)(ContactList);