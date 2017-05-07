import React from 'react';

export default class DeleteButton extends React.Component{
    deleteHandler(){
        console.log('ку-ку');
    }
    render(){
        return(
            <button onClick={this.deleteHandler.bind(this)}>
                delete
            </button>
        );
    }
}