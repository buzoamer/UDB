

const eventService = {
    create,
    load,
    update,
    show
}

async function create(data){
    const res = await fetch('/api/events/create', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
return await res.json()
}
async function load(){
    const res = await fetch('/api/events/load')
    const events = await res.json()

    return events
}

async function update(data){
    const res = await fetch('/api/events/update', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
const event = await res.json()
return event
}

async function show(id){
    const res = await fetch('/api/events/show',{
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:id
    })
    let data = await res.json()
    return data
}

export default eventService
