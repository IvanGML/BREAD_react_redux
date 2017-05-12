import React from 'react';
import { connect } from 'react-redux';
import { NewContact } from '../actions'

class AddButton extends React.Component{
    createNewContact=()=>{
        const newObj = {
            id: 1,
            name: this.inputName.value,
            phone: this.inputPhone.value
        }
        this.props.setNewContactInfo(newObj)
        this.inputName.value = '';
        this.inputPhone.value = '';
    }
    render(){
        return(
            <div id="AddContactMenu" className='displayNone' style={{margin: '30px auto'}}>
                <input type="text" placeholder='New name' ref={(input)=>{this.inputName = input}}/><br/>
                <input type="text" placeholder='New phone' ref={(input)=>{this.inputPhone = input}}/>
                <button onClick={this.createNewContact}>Add</button>
            </div>
        );
    }
}

export default connect(    
        state => ({
            globalStore: state
        }),
        dispatch => ({
            setNewContactInfo: (value)=>{dispatch(NewContact(value))}
    }))(AddButton);

