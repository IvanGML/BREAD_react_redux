export const onChangeAction = (value) => dispatch => dispatch({type: 'CHANGE_INPUT_VALUE', payload: value})

export const onMakeSearchAction = (value) => dispatch => dispatch({type: 'MAKE_SEARCH', payload: value})

export const deleteAction = (newStore) => dispatch => dispatch({type: 'DELETE_FROM_STORE', payload: newStore})