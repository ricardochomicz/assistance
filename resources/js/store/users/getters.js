export default {
  getUserById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}