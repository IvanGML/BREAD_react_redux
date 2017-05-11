const initialInput = (state = '' , action) => {
    switch (action.type) {
        case 'SET_NEW_CONTACT_INFO':
            return action.payload;
        default:
            return state;
    }}
export default initialInput;