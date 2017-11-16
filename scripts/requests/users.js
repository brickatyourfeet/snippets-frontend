window.User ={
    index(){
      return axios.get('https://blooming-tundra-73705.herokuapp.com/users').then(result=>{
        console.log(result)
      })
    },
    destroy(id){
        return axios.delete(`https://blooming-tundra-73705.herokuapp.com/snippets/${id}`)
        .then(result=>{
            console.log(result)
        })
    },
    create(body){
        return axios.post('https://blooming-tundra-73705.herokuapp.com/snippets', body)
        .then(result=>{
           console.log(result) 
        })
    }
    
}