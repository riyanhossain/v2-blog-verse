const initialState = {
    isLoading: false,
    user: {},
    isSignIn: false,
    token: '',
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user,
                isSignIn: action.payload.isSignIn,
                isLoading: action.payload.isLoading,
                token: action.payload.token,
            }
        case 'SIGN_OUT':
            return {
                ...state,
                user: {},
                isSignIn: false,
                isLoading: false,
                token: '',
            }
        default:
            return state;
    }
}

export { initialState, reducer };