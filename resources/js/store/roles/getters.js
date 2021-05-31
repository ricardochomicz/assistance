export default {
  getRoleById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}