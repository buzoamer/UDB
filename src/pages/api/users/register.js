import knex from '../../../database';

export default async function handler(req, res) {
 const data = req.body
 let user = await knex('users').where({
    email: data.email
 })

 if (!!user.length){
   return res.status(500).json({status:500, message:'This user is already registered'})
 }
 user = await knex('users').insert({
    name: data.name,
    email: data.email,
    password: data.password
 } , ['id', 'name', 'email']
 )
 res.status(200).json({status:200, message: 'User successfully created!'});
}