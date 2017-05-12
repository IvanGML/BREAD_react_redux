import React from 'react';
import { connect } from 'react-redux';
import { onChangeAction, onMakeSearchAction } from '../actions'
import AddContact from './AddContact'

class InputFilter extends React.Component{
  changeInput = (e) =>{
    this.props.onChangeInput(e.target.value);
  }
  toggleAddContact = () => {
    let elem = document.getElementById('AddContactMenu');
    elem.classList.toggle('displayNone');
  }
  render(){
    const inputStyle = {
      width: '200px',
      margin: "20px auto",
      textAlign: "center"
    }
    return(
      <div style={inputStyle}>
        <label>Search by name 
          <input 
            type="text"
            value={this.props.globalStore.initialInput}
            onChange={this.changeInput}/>
        </label>
        <button onClick={this.toggleAddContact}>+</button>
        <AddContact/>
      </div>
    );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({
    onChangeInput: (value) => {
      dispatch(onChangeAction(value))
    },
    onMakeSearch: (value) => {
      dispatch(onMakeSearchAction(value))
    }
  })
)(InputFilter);