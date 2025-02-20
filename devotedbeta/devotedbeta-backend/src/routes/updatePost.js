import { db } from "../database";

export const updatePostRoute = {
    method: 'POST',
    path: '/api/posts/{id}',
    handler: async (req, res) => {
        const {id} = req.params;
        const {title, passage, description} = req.payload;
        const userid = 12345;
        await db.query(`
            UPDATE posts
                SET title=?, passage=?, description=?
                WHERE id=? and userid=?`,
            [title, passage, description, id, userid])
        const {results} = await db.query(
            'SELECT * FROM posts WHERE id=? AND userid=?',
        [id, userid])
        return results[0];
    }
}