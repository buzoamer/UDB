// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from '../../database';

export default async function handler(req, res) {

 const users = await knex.select().table('users')
  res.status(200).json(users)

 const event = await knex.select().table('posts')
 res.status(200).json(posts)

 const comment = await knex.select().table('comments')
 res.status(200).json(comment)
}



