import initialState from '../data/contacts'
const initialList = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_FROM_STORE':
            return action.payload;
        default:
            return state;
    }
};

export default initialList;