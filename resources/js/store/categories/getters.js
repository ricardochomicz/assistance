export default {
  getCategoryById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}