const initialInput = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_VALUE':
            return action.payload;
        case 'MAKE_SEARCH':
            return action.payload;
        default:
            return state;
    }}
export default initialInput;