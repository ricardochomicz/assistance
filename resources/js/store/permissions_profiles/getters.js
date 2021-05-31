export default {
  getPermissionId: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}