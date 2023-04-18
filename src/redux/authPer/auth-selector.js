export const getIsLoaggedIn = state => state.auth.isLoaggedIn
export const getUsername= state => state.auth.user.name

const authSelectors ={
    getIsLoaggedIn,
    getUsername
}

export default authSelectors