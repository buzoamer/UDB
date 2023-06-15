
const commentService = {
    create,
    load
}

async function create(data){
    const res = await fetch('/api/comments/create', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
    const comm_data = await res.json()
     return console.log(comm_data)
    return await res.json()
}

async function load(){
    const res = await fetch('/api/comments/load')
    const comments = await res.json()

    return comments
}
export default commentService