export const onChangeAction = (value) => dispatch => dispatch({
    type: 'CHANGE_INPUT_VALUE',
    payload: value
})

export const onMakeSearchAction = (value) => dispatch => dispatch({
    type: 'MAKE_SEARCH',
    payload: value
})

export const deleteAction = (newStore) => dispatch => dispatch({
    type: 'DELETE_FROM_STORE',
    payload: newStore
})

export const setInfo = (value) => dispatch => dispatch({
    type: 'SET_NEW_CONTACT_INFO',
    payload: value
})

export const NewContact = (value) => dispatch => dispatch({
    type: 'CREATE_NEW_CONTACT',
    payload: value
})