import React from 'react';
import { connect } from 'react-redux';

class AddButton extends React.Component{
    render(){
        return(
            <div id="AddContactMenu" className='displayNone' style={{margin: '30px auto'}}>
                <input type="text" placeholder='New name'/><br/>
                <input type="text" placeholder='New phone'/>
                <button>Add</button>
            </div>
        );
    }
}

export default connect()(AddButton);

