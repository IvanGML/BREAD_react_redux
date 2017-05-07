import React from 'react';
import { connect } from 'react-redux';

class InputFilter extends React.Component{
  constructor(props){
    super(props);
    this.changeInput = this.changeInput.bind(this)
  }
  changeInput(e){
    console.log(e.target.value);
    this.props.onChangeInput(e.target.value);
  }
  render(){
    return(
      <div>
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
      dispatch({type: 'CHANGE_INPUT_VALUE', payload: value})
    },
    onMakeSearch: (value) => {
      dispatch({type: 'MAKE_SEARCH', payload: value})
    }
  })
)(InputFilter);