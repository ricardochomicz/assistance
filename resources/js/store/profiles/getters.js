export default {
  getProfileById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}