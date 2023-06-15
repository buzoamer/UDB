const eventService = {
    create,
    load
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

export default eventService
