import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setInfo } from '../actions'


class EditContact extends React.Component{
    applyApdate=()=>{
        const returnedObj = {
            id: this.props.contact.id,
            newName: this.inputName.value,
            newPhone: this.inputPhone.value
        }
        let editiIt = confirm(
`DoE you want update this contact with next parameters?
new name: ${this.inputName.value}
new phone: ${this.inputPhone.value}`
        );
        if(editiIt){
            this.props.setNewContactInfo(returnedObj);
            this.forceUpdate();
        }
    }
    render(){
        return(
                <div>
                    {`Contact name: ${this.props.contact.name}`}<br/>
                    {`Contact name: ${this.props.contact.phone}`}
                    <div>
                        <div>
                            <label>Type new name
                                <input 
                                type='text' 
                                placeholder={this.props.contact.name}
                                ref={(input)=>{this.inputName = input}}/></label><br/>
                            <label>Type new phone number<input 
                                type='text' 
                                placeholder={this.props.contact.phone}
                                ref={(input)=>{this.inputPhone = input}}/></label>
                        </div>
                        <button onClick={this.applyApdate}>Edit</button>
                        <Link to='/'>
                            <button>
                                To main page
                            </button>
                        </Link>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contact: state.initialList.find(contact => contact.id === Number(ownProps.params.id))
    };
}

export default connect(
    mapStateToProps,
    dispatch => ({
        setNewContactInfo: (value)=>{
            dispatch(setInfo(value))
        }
      })
)(EditContact);