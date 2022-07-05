export const state = () => {
    AuthToken: null;
}

export const mutations = {
    SetAuthToken(state, token){
        state.AuthToken = token;
    }
}