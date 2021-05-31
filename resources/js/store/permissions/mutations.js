export default {
    SET_PERMISSIONS(state, permissions) {
        state.items = permissions
    },
    SET_PERMISSION(state, permissions) {
        state.item = permissions
    }
}
