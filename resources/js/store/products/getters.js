export default {
  getProductById: (state) => (id) => {
    return state.items.find(data => data.id === id)
  }
}