import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewPostRoute = {
    method: 'POST',
    path: '/api/posts',
    handler: async (req, res) => {
        const id = uuid();
        const {title = '', passage = '', description = ''} = req.payload;
        const userid = '12345';
        const views = 0;

        await db.query(`
            INSERT INTO posts (id, title, passage, description, userid, views)
                VALUES (?, ?, ?, ?, ?, ?)`,
            [id, title, passage, description, userid, views]
        )

        return {id, title, passage, description, userid, views}
    }
}