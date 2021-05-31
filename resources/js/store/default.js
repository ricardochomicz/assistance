export const state = {
    preloader: false,
    preloaderCard: false,
    textPreloader: 'Carregando...',
    msg: {
        icon: '',
        text: ''
    }
}

export const mutations = {
    SET_PRELOADER(state, status) {
        state.preloader = status
    },
    SET_PRELOADERCARD(state, status) {
        state.preloaderCard = status
    },
    SET_TEXT_PRELOADER(state, text) {
        state.textPreloader = text
    },
    SET_MSG(state, icon, text) {
        state.msg.icon = icon
        state.msg.text = text
    }
}
