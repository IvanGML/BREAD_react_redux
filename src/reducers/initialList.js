import initialState from '../data/contacts'
const initialList = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_FROM_STORE':
            return action.payload;
        case 'SET_NEW_CONTACT_INFO':
            return action.payload;
        default:
            return state;
    }
};

export default initialList;