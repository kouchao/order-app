const baseUrl = 'http://localhost:20001'
const api = {};
['order',
'orderDetail'].forEach(o => {
  api[o] = `${baseUrl}/${o}`
})
export default api
