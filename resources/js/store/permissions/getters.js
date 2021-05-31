export default {
  getPermissionById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}