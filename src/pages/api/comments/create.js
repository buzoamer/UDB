import knex from '../../../database';

export default async function handler(req, res) {
const data = req.body

 let comment = await knex('comments').where("email", data.email)
 if (!!comment.length){
    return res.status(500).json({message: 'Comment already exists'})
 }

 let newComment = await knex('comments').insert({
    email: data.email,
    content: data.content,
    name: 'Name',
    post_id: 2
 }

 )
 
 return res.json({data: newComment})
}