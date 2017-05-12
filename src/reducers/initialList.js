import initialState from '../data/contacts'
const initialList = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_FROM_STORE':
            return action.payload;
        case 'SET_NEW_CONTACT_INFO':
            let newState = state.map(contact => {
                if (contact.id === action.payload.id) {
                    contact.name = action.payload.newName;
                    contact.phone = action.payload.newPhone;
                }
                return contact;
            })
            return newState;
        default:
            return state;
    }
};

export default initialList;