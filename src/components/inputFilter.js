import React from 'react';
import { connect } from 'react-redux';
import { onChangeAction, onMakeSearchAction } from '../actions'

class InputFilter extends React.Component{
  changeInput = (e) =>{
    console.log(e.target.value);
    this.props.onChangeInput(e.target.value);
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