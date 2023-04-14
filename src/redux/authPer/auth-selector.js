const getIsLoaggedIn = state => state.auth.isLoaggedIn
const getUsername= state => state.auth.user.name

const authSelectors ={
    getIsLoaggedIn,
    getUsername
}

export default authSelectors