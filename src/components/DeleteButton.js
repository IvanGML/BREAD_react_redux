import React from 'react';

export default class DeleteButton extends React.Component{
    deleteHandler(){
        this.props.onDelete(this.props.whichItem);
    }
    render(){
        return(
            <button onClick={this.deleteHandler.bind(this)}>
                delete
            </button>
        );
    }
}