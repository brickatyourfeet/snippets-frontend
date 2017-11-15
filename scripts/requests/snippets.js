
//change this url to baseURL
window.Snippet = {
    index(){
        return axios.get('https://blooming-tundra-73705.herokuapp.com/snippets')
            .then(result=> result.request.response)
    },
    find(id){
        //return axios.get(`${baseURL}/${id}`)
    },
    create(body){
        return axios.post('https://blooming-tundra-73705.herokuapp.com/snippets', body)
        .then(result=>{
           console.log(result) 
        })
    },
    destroy(id){
        //return axios.delete(`${baseURL}/${id}`)
    },
    update(id, body){
        return axios.patch(`https://blooming-tundra-73705.herokuapp.com/snippets/${id}`, body)
            .then(result => "ok?");
    },
    getUsers(){
      return axios.get('https://blooming-tundra-73705.herokuapp.com/users').then(result=>{
        console.log(result)
      })
    }
}