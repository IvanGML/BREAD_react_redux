import React from 'react';

export default class DeleteButton extends React.Component{
    deleteHandler = () => {
        var deletContact = confirm("Do you really want delete this contact from contact-list?");
        if(deletContact){
            this.props.onDelete(this.props.whichItem)};
        }
    render(){
        return(
            <button onClick={this.deleteHandler}>
                delete
            </button>
        );
    }
}