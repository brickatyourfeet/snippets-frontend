//change this url to baseURL
window.Snippet = {
    index(){
        return axios.get('https://blooming-tundra-73705.herokuapp.com/snippets').then(result=>{
            console.log(result)
        })
    },
    find(id){
        return axios.get(`${baseURL}/${id}`)
    },
    create(body){
        return axios.post(`${baseURL}/ body}`)
    },
    destroy(id){
        return axios.delete(`${baseURL}/${id}`)
    },
    update(id, body){
        return axios.put(`${baseURL}/${id}`, body)
    }
}


////these aren't fucking working when I use baseURL for some reason.