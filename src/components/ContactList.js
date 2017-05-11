import React from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton'
import { deleteAction } from '../actions';
import EditContact from './EditContact'
import { Link } from 'react-router'

class ContactList extends React.Component{
  deleteContact=(item)=>{
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
    const itemStyle = {
                        marginTop: '10px',
                        padding: '10px 10px 10px 30px',
                        backgroundColor: '#f3f3f3',
                        borderRadius: "4px"
                      };
    return(
      <ul>
        {filteredList.map((item, index) => 
          <div key={index} style={itemStyle}>
            <li>
              {`Contact name: ${item.name}`}
                <br/>
               {`Contact phone: ${item.phone}`}<br/>
              <DeleteButton
                onDelete={this.deleteContact}
                whichItem={item.name}/>
              <Link to={`/EditContact/${item.id}`}><button>Edit Contact</button></Link>
            </li>
          </div>
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