// api.js
const api = {
    // Add functions for making API requests
    get: (url) => fetch(url).then((response) => response.json()),
    post: (url, data) => fetch(url, { method: 'POST', body: JSON.stringify(data) }),
    // Add more API functions as needed
  };
  
  export default api;
  