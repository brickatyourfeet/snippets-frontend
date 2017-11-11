const local = 'http://localhost:3000/snippets'
const heroku = 'https://blooming-tundra-73705.herokuapp.com/snippets'
const baseURL = window.location.href.includes('herokuapp') ? heroku : local

