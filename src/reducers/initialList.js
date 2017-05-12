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
            let temp = newState.map(item => item)
            return temp;
        case 'CREATE_NEW_CONTACT':
            let tempPayload = action.payload;
            if(state === undefined){
                tempPayload.id = state[state.length-1].id+1
            } else {
                tempPayload.id = 1
            }
            state[state.length] = action.payload
            let newStore = state.map(item => item)
            return newStore 
        default:
            return state;
    }
};

export default initialList;