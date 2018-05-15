const baseUrl = 'http://localhost:20001'
const api = {};
['order'].forEach(o => {
  api[o] = `${baseUrl}/${o}`
})
export default api
