

const userService = {
    getAll, 
    register,
    login
}


async function getAll(){
    const res = await fetch('/api/users')
    const data = await res.json()
    console.log(data)
}

async function register(data){
    console.log(JSON.stringify(data))
    const res = await fetch('/api/users/register', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })

    return await res.json()
}

async function login(data){
    const res = await fetch('api/users/login', {
        headers:{"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(data)
    })
    return await res.json()
}


export default userService